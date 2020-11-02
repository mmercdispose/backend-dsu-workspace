const {execSync} = require('child_process');
const octopusFile = require('./octopus.json')

const deps = octopusFile.dependencies.map((dep) => dep.src).filter((dep) => !!dep)

const executeWrapper = (cmd) => {
  console.log(`executing: "${cmd}"`)
  execSync(cmd, {stdio: 'inherit'})
}

for (let i = 0; i < deps.length; i++) {
  const dep = deps[i];
  let origin = dep.split('/')[4].replace('.git', '')
  console.log(`------------------------------`)
  console.log(`${i}: running op for origin: ${origin}`)
  
  executeWrapper(`git remote add ${origin} ${dep}`)
  executeWrapper(`git subtree add --squash --prefix=${origin}/ ${origin} master`)
}
