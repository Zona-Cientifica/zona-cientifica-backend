const User = require("../../models/User")


  async function addFavorite(req, res){
    User.findOne({email: req.body.email}).then((user)=>{
        user.favoriteList.push(req.body.eventName);

        user.save().then(()=>{
            res.status(200).json({message: 'Evento adicionado à lista de favoritos'})
        }).catch((err)=>{
            res.status(400).json({message: 'Ocorreu um erro: '+err});
        })
    })
  }


  async function getFavoriteList(req, res){
    User.findOne({email: req.body.email}).lean().then((user)=>{
        res.status(200).json({favoriteList: user.favoriteList})
    }).catch((err)=>{
        res.status(400).json({message: 'Erro na busca: '+err})
    })
  }   

  module.exports = {addFavorite, getFavoriteList}