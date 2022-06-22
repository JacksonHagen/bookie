import { Auth0Provider } from '@bcwdev/auth0provider'
import { booksService } from '../services/BooksService.js'
import BaseController from '../utils/BaseController.js'

export class BooksController extends BaseController {
  constructor() {
    super('api/books')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const books = await booksService.getAll(req.userInfo.id)
      return res.send(books)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const book = await booksService.getById(req.params.id, req.userInfo.id)
      return res.send(book)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const book = await booksService.create(req.body)
      return res.send(book)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      req.body.creatorId = req.userInfo.id
      const book = await booksService.edit(req.body, req.params.id, req.userInfo.id)
      return res.send(book)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await booksService.delete(req.params.id, req.userInfo.id)
      return res.send('Deleted')
    } catch (error) {
      next(error)
    }
  }
}
