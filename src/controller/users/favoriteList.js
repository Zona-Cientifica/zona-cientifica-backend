const User = require("../../models/User");
const Event = require("../../models/Event");

async function addFavorite(req, res) {
  const { id, title, picture, description, date } = req.body;
  User.findOne({ email: req.body.email }).then((user) => {
    user.favoriteList.push({ id, title, picture, description, date });

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
    const newList = user.favoriteList.filter((favorite) => {
      if (favorite.id !== req.body.id) {
        return favorite;
      }
    });
    user.favoriteList = newList;
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
