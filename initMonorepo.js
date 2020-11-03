const {execSync} = require('child_process');
const octopusFile = require('./octopus.json')

const executeCommand = (cmd) => {
  console.log(`executing: "${cmd}"`)
  execSync(cmd, {stdio: 'inherit'})
}

const gitDependencies = octopusFile.dependencies
  .map((remote) => !!remote.src ? {
      targetDir: remote.name,
      src: remote.src.toLowerCase(),
      origin: remote.src.toLowerCase().split('/')[4].replace('.git', '')
    } : null )
  .filter((remote) => !!remote)

console.log(gitDependencies);

const addUniqueRemotes = () => {
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
  for (let i = 0; i < gitDependencies.length; i++) {
    const remote = gitDependencies[i];
    executeCommand(`git subtree add --squash --prefix=${remote.targetDir}/ ${remote.origin} master`) 
  }
}

addUniqueRemotes()
addSubtrees()