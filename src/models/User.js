const mongoose = require('mongoose')

const User = mongoose.model('User', {
  name: String,
  userName: String,
  email: String,
  phone: String,
  picture: String,
  password: String,
  picture: String,
  passwordResetToken: String,
  purchaseHistoric: Array,
  participatingList: Array,
  favoriteList: Array
})

module.exports = User
