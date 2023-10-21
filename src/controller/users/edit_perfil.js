const User = require("../../models/User")

  
async function confirmEdit(req, res) {
    User.findOne({email: req.body.email}).then((user)=>{
  
      user.nome = req.body.nome
      user.apelido = req.body.apelido
      user.email = req.body.email
      user.telefone = req.body.telefone
      user.save().then(()=>{
        res.render('confirmedit')
      })
  
    })
  }

  module.exports =  confirmEdit;