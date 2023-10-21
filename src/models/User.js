const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  apelido: String,
  email: String,
  telefone: Number,
  password: String,
  passwordResetToken: String,
  purchaseHistoric: Array,
  favoriteList: Array
})

module.exports = User
