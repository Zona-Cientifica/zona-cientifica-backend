const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  apelido: String,
  email: String,
  telefone: String,
  password: String,
  passwordResetToken: String,
  purchaseHistoric: Array,
  participatingList: Array,
  favoriteList: Array
})

module.exports = User
