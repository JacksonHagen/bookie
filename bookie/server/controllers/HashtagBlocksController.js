import { Auth0Provider } from '@bcwdev/auth0provider'
import { hashtagBlocksService } from '../services/HashtagBlocksService.js'
import BaseController from '../utils/BaseController.js'

export class HashtagBlocksController extends BaseController {
  constructor() {
    super('api/hashtags')
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
      const hashtagBlocks = await hashtagBlocksService.getAll(req.userInfo.id)
      return res.send(hashtagBlocks)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const hashtagBlock = await hashtagBlocksService.getById(req.params.id, req.userInfo.id)
      return res.send(hashtagBlock)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const hashtagBlock = await hashtagBlocksService.create(req.body)
      return res.send(hashtagBlock)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      req.body.creatorId = req.userInfo.id
      const hashtagBlock = await hashtagBlocksService.edit(req.body, req.params.id, req.userInfo.id)
      return res.send(hashtagBlock)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await hashtagBlocksService.delete(req.params.id, req.userInfo.id)
      return res.send('Successfully deleted')
    } catch (error) {
      next(error)
    }
  }
}
