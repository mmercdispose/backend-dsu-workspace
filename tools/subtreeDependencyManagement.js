const {execSync} = require('child_process');
const octopusFile = require('../octopus.json')

const executeCommand = (cmd) => {
  console.log(`executing: "${cmd}"`)
  execSync(cmd, {stdio: 'inherit'})
}

const getGitDependenciesFromOctopus = (octopusFile) => octopusFile.dependencies
  .map((remote) => !!remote.src ? {
      targetDir: remote.name,
      src: remote.src.toLowerCase(),
      origin: remote.src.toLowerCase().split('/')[4].replace('.git', '')
    } : null )
  .filter((remote) => !!remote)

const addUniqueRemotes = (octopusFile) => {
  const gitDependencies = getGitDependenciesFromOctopus(octopusFile)
  const uniqueOriginsMap = {}

  for (let i = 0; i < gitDependencies.length; i++) {
    const remote = gitDependencies[i];

    if (uniqueOriginsMap[remote.origin]) {
      continue
    }
    uniqueOriginsMap[remote.origin] = true

    executeCommand(`git remote add ${remote.origin} ${remote.src}`)
  }

  console.log('> all remotes added successfully')
}

const addSubtrees = () => {
  const gitDependencies = getGitDependenciesFromOctopus(octopusFile)

  for (let i = 0; i < gitDependencies.length; i++) {
    const remote = gitDependencies[i];
    executeCommand(`git subtree add --squash --prefix=${remote.targetDir}/ ${remote.origin} master`) 
  }
}

exports.addUniqueRemotes = addUniqueRemotes
exports.addSubtrees = addSubtrees