const mongoose = require('mongoose')

const Card = mongoose.model('Card', {
  name: String,
  numero: String,
  validade: String,
  cvc: String,
  bandeira: String
})

module.exports = Card
