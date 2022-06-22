import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { BookSchema } from '../models/Book.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Account = mongoose.model('Account', AccountSchema)
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts')
  Books = mongoose.model('Book', BookSchema)
}

export const dbContext = new DbContext()
