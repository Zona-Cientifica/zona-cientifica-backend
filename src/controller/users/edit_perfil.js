const User = require("../../models/User")

  
async function confirmEdit(req, res) {
  const {name, apelido, telefone, email} = req.body;

  const user = await User.updateOne({email: email}, {$set: {name, apelido, telefone}});

  res.send("Usuário atualizado");
}

  module.exports =  confirmEdit;