const request = require('supertest')
const { mongoose } = require('../../config/config')
const server = require('../../app')
const booksService = require("../../src/api/resources/books/books.service");
const Book = require("../../src/api/resources/books/books.model");


jest.setTimeout(15000); // 15 seconds


beforeEach(async () => {
    await Book.deleteMany()
})


afterAll(async () => {
    await Book.deleteMany()
    await mongoose.disconnect()
    server.close()
});

describe('getBook', () => {
    it('should retrieve a specific book', async () => {
        const book = await Book.insertOne({title: 'book0'})
        
        const res = await request(server).get(`/api/v1/books/${book.id}`)
        expect(res.status).toBe(200)
        expect(res.body.message).toMatch('book retrieved successfully')
        expect(res.body.data.book).toMatchObject({title: 'book0'})
    })
    it('should return 404 if the book not found', async() => {
        const res = await request(server).get(`/api/v1/books/64c88f7e95dbf6b4a3f2d9e1`)
        expect(res.status).toBe(404)
    })
})

describe('updateBook', () => {
    it('should return 404 if the book not found', async() => {
        const res = await request(server).get(`/api/v1/books/64c88f7e95dbf6b4a3f2d9e1`)
        expect(res.status).toBe(404)
    })

    it('should update the book', async () => {
        const book = await booksService.createBook({title: 'book0'})
        const res = await request(server).put(`/api/v1/books/${book._id}`).send({title: 'book0 updated'})
        expect(res.status).toBe(200)
        expect(res.body.message).toMatch('book updated successfully')
        expect(res.body.data.book).toMatchObject({title: 'book0 updated'})
    })
})


describe('deleteBook', () => {
    it('should delete the book', async() => {
        const book = await booksService.createBook({title: 'book0'})
        const res = await request(server).delete(`/api/v1/books/${book._id}`)
        expect(res.status).toBe(200)
        expect(res.body.message).toMatch('book deleted successfully')
    })
})