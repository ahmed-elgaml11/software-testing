const  Book  = require("../../src/api/resources/books/books.model");
const booksService = require("../../src/api/resources/books/books.service");
const { mongoose } = require('../../config/config')

jest.setTimeout(10000); // 10 seconds

beforeEach(async () => {
    await Book.deleteMany()
})


afterAll(async () => {
    await Book.deleteMany()
    await mongoose.disconnect()
});

describe("getBooks", () => {
    it("should return empty array", async () => {
        const books = await booksService.getBooks();
        expect(books.length).toBe(0);
    });

    it('should return 2 books', async () => {
        await Book.insertMany([{title: 'book1'}, {title: 'book2'}])
        const books = await booksService.getBooks();
        expect(books.length).toBe(2);
        expect(books[0]).toMatchObject({title: 'book1'})
    })
});

describe('createBook', () => {
    it('should create new book', async() => {
        const book = await booksService.createBook({title: 'book1'})
        const books = await Book.find()
        expect(book).toMatchObject({title: 'book1'})
        expect(books.length).toBe(1)
    })
})





