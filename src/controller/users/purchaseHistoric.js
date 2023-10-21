const User = require("../../models/User")

//  COMPRAR EVENTO
  async function buyEvent(req, res){
    User.findOne({email: req.body.email}).then((user)=>{
        user.purchaseHistoric.push(req.body.eventName);

        user.save().then(()=>{
            res.status(200).json({message: 'Evento adquirido com sucesso!'})
        }).catch((err)=>{
            res.status(400).json({message: 'Ocorreu um erro na compra: '+err});
        })
    })
  }

// BUSCAR HISTORICO DE COMPRAS

  async function getPurchaseHistoric(req, res){
    User.findOne({email: req.body.email}).lean().then((user)=>{
        res.status(200).json({purchaseHistoric: user.purchaseHistoric})
    }).catch((err)=>{
        res.status(400).json({message: 'Erro na busca: '+err})
    })
  }

  module.exports = {buyEvent, getPurchaseHistoric}