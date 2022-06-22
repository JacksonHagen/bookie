import { dbContext } from '../db/DbContext.js'
import { Forbidden } from '../utils/Errors.js'

class BooksService {
  async getAll(creatorId) {
    const books = await dbContext.Books.find({ creatorId }).populate('creator')
    return books
  }

  async getById(id, userId) {
    const book = await dbContext.Books.findById(id).populate('creator')
    if (book.creatorId.toString() !== userId) {
      throw new Forbidden('You do not have access to this book')
    }
    return book
  }

  async create(body) {
    const book = await dbContext.Books.create(body)
    await book.populate('creator')
    return book
  }

  async edit(body, id, userId) {
    const targetBook = await this.getById(id, userId)
    targetBook.title = body.title || targetBook.title
    targetBook.author = body.author || targetBook.author
    targetBook.releaseDate = body.releaseDate || targetBook.releaseDate
    targetBook.publisher = body.publisher || targetBook.publisher
    targetBook.format = body.format || targetBook.format
    targetBook.platform = body.platform || targetBook.platform
    targetBook.status = body.status || targetBook.status
    targetBook.rating = body.rating || targetBook.rating
    await targetBook.save()
    return targetBook
  }

  async delete(id, userId) {
    const target = await this.getById(id, userId)
    target.isArchived = true
    await target.save()
    return target
  }
}

export const booksService = new BooksService()
