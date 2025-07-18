const path = require('path')

const {getImagesInDirectory} = require('./getRandomImage')

console.log(getImagesInDirectory(path.join(__dirname, './images/backlog')))
