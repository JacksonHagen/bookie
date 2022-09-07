import { dbContext } from '../db/DbContext.js'
import { Forbidden } from '../utils/Errors.js'

class HashtagBlocksService {
  async getAll(creatorId) {
    const hashtagBlocks = await dbContext.HashtagBlocks.find({ creatorId }).populate('creator')
    return hashtagBlocks
  }

  async getById(id, userId) {
    const hashtagBlock = await dbContext.HashtagBlocks.findById(id).populate('creator')
    if (hashtagBlock.creatorId.toString() !== userId) {
      throw new Forbidden('You do not have access to that hashtag block')
    }
    return hashtagBlock
  }

  async create(body) {
    const hashtagBlock = await dbContext.HashtagBlocks.create(body)
    await hashtagBlock.populate('creator')
    return hashtagBlock
  }

  async edit(body, id, userId) {
    const targetHashtagBlock = await this.getById(id, userId)
    targetHashtagBlock.hashtagList = body.hashtagList || targetHashtagBlock.hashtagList
    targetHashtagBlock.bgColor = body.bgColor || targetHashtagBlock.bgColor
    await targetHashtagBlock.save()
    return targetHashtagBlock
  }

  async delete(id, userId) {
    await this.getById(id, userId)
    dbContext.HashtagBlocks.findByIdAndDelete(id)
  }
}

export const hashtagBlocksService = new HashtagBlocksService()
