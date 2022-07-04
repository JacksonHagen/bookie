import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const BookSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  title: { type: String, required: true },
  imgUrl: { type: String, required: true },
  author: { type: String, required: true },
  releaseDate: { type: String, required: true },
  publisher: { type: String, required: true },
  format: { type: String, required: true }, // NOTE physical or digital, or audiobook
  platform: { type: String, required: true },
  status: { type: String, enum: ['reading soon', 'reading', 'read', 'TBD'], default: 'TBD' },
  rating: { type: Number, default: 0 },
  isArchived: { type: Boolean, default: false }
},
{
  timestamps: true,
  toJSON: { virtuals: true }
}
)
BookSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
