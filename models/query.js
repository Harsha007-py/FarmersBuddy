const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const QuerySchema = new Schema({
  email: {
    type: String
  },
  phone: {
    type: String
  },
  crop: {
      type:String
  },
  query: {
    type: String,
    required: true
  },
  isAnswered: {
      type:Boolean
  }
})

module.exports = Query = mongoose.model('query', QuerySchema)