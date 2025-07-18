const { thumbnailMover, fileMover } = require("../thumbnailMover");
const fs = require("fs");

describe("thumbnailMover", () => {
  it("should move the image to good if there is imageId and good property", async () => {
    const isGood = true;
    const imageId = "examplegood.png";
    const fileMover = jest.fn()
    await thumbnailMover({ fileMover, imageId, isGood });
    const src = `./images/backlog/${imageId}`;
    const dst = `./images/good/${imageId}`;
    expect(fileMover).toHaveBeenCalledWith(src, dst);
  });
  it("should move the image to bad if there is imageId and bad property", async () => {
    const isGood = false;
    const imageId = "examplebad.png";
    const fileMover = jest.fn()
    await thumbnailMover({ fileMover, imageId, isGood });
    const src = `./images/backlog/${imageId}`;
    const dst = `./images/bad/${imageId}`;
    expect(fileMover).toHaveBeenCalledWith(src, dst);
  });
});

jest.mock("fs");
describe("fileMover", () => {
  it("should move a file using node fs", async () => {
    const src = "./a.png";
    const dst = "./b.png";
    await fileMover(src, dst);
    expect(fs.renameSync).toHaveBeenCalledWith(src, dst);
  });
});
