const fs = require("fs");

const fileMover = async (src, dst) => {
    fs.renameSync(src, dst); 
}

const thumbnailMover = async ({fileMover, imageId, isGood }) => {
    const srcLocation = `./images/backlog/${imageId}`;
    const rating = isGood ? "good" : "bad";
    const destLocation = `./images/${rating}/${imageId}`;
    await fileMover(srcLocation, destLocation);
};

module.exports = {
    fileMover,
    thumbnailMover,
};
