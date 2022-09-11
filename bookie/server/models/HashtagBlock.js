import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HashtagBlockSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
  hashtagList: { type: Array, required: true },
  bgColor: { type: String, required: true },
  title: { type: String, required: true }
},
{
  timestamps: true,
  toJSON: { virtuals: true }
}

)
HashtagBlockSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
