
const {addUniqueRemotes, addSubtrees} = require('./subtreeDependencyManagement')
const octopusFile = require('../octopus.json')

addUniqueRemotes(octopusFile)
addSubtrees(octopusFile)