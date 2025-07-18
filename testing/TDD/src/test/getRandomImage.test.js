const fs = require("fs");
const path = require('path')



const { getRandomImage, getImagesInDirectory } = require("../getRandomImage");
describe("getRandomIamge", () => {
    it("should return a random image from './image/backlog' directory ", async () => {
        const imgs = ["a.png", "b.png", "c.png"];
        const getImagesInDirectory = jest.fn().mockReturnValue(imgs);
        const randomImage = getRandomImage({getImagesInDirectory});
        expect(imgs).toContain(randomImage);
    });
});

jest.mock("fs");
describe("getImagesInDirectory", () => {
    beforeEach(() => {
        fs.readdirSync.mockImplementation(() => ["a.png", "b.png", "c.png"]);
    });

    it("should list all images in a directory", () => {
        const images = getImagesInDirectory(path.join(__dirname, '../images/backlog'));
        expect(fs.readdirSync).toHaveBeenCalledWith(path.join(__dirname, '../images/backlog'))
        expect(images.length).toBe(3);
    });
});
