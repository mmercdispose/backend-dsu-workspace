const {addUniqueRemotes} = require('./subtreeDependencyManagement')
const octopusFile = require('../octopus.json')

addUniqueRemotes(octopusFile)