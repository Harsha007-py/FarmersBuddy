const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const CropSchema = new Schema({
  email: {
    type: String
  },
  phone: {
    type: String
  },
  village: {
    type: String,
  },
  district: {
    type: String,
  },
  state: {
      type: String,
  },
  crop: {
    type: String,
  },
  soil: {
      type:String,
  },
  area: {
      type:String,
  }
})

module.exports = Crop = mongoose.model('Crop', CropSchema)