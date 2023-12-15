const User = require("../../models/User")

  
async function confirmEdit(req, res) {
  const {name, username, phone, email} = req.body;

  const user = await User.updateOne({email: email}, {$set: {name, userName:username, phone}});

  res.send("Usuário atualizado");
}

  module.exports =  confirmEdit;