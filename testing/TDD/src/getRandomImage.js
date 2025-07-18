const fs = require('fs')
const path = require('path')

const getImagesInDirectory = (path) => {
    return fs.readdirSync(path)
}

const getRandomImage = ({ getImagesInDirectory, folder = path.join(__dirname, './images/backlog') }) => {
    const imgs = getImagesInDirectory(folder);
    return imgs[Math.floor(Math.random() * imgs.length)];
};

module.exports = {
    getRandomImage,
    getImagesInDirectory
}