const User = require("../../models/User");

async function addFavorite(req, res) {
  User.findOne({ email: req.body.email }).then((user) => {
    user.favoriteList.push(req.body.id);

    user
      .save()
      .then(() => {
        res
          .status(200)
          .json({ message: "Evento adicionado à lista de favoritos" });
      })
      .catch((err) => {
        res.status(400).json({ message: "Ocorreu um erro: " + err });
      });
  });
}

async function getFavoriteList(req, res) {
  User.findOne({ email: req.body.email })
    .lean()
    .then((user) => {
      res.status(200).json({ favoriteList: user.favoriteList });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro na busca: " + err });
    });
}

async function deleteFavorite(req, res) {
  User.findOne({ email: req.body.email }).then((user) => {
    let index = user.favoriteList.indexOf(req.body.id);
    if (index > -1) {
      user.favoriteList.splice(index, 1);
    }
    user
      .save()
      .then(() => {
        res
          .status(200)
          .json({ message: "Evento removido à lista de favoritos" });
      })
      .catch((err) => {
        res.status(400).json({ message: "Ocorreu um erro: " + err });
      });
  });
}

module.exports = { addFavorite, getFavoriteList, deleteFavorite };
