const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Image = new Schema({
  image_name: {
    type: String
  },
  image_url: {
    type: String
  }
}, {
  collection: 'images'
})

module.exports = mongoose.model('Image', Image)