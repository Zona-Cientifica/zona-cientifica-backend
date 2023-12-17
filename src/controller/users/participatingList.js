const User = require("../../models/User");

async function addParticipating(req, res) {
  const { _id, title, picture, description, date, location } = req.body;
  User.findOne({ email: req.body.email }).then((user) => {
    user.participatingList.push({
      _id,
      title,
      picture,
      description,
      date,
      location,
    });

    user
      .save()
      .then(() => {
        res
          .status(200)
          .json({ message: "Evento adicionado à lista de participando" });
      })
      .catch((err) => {
        res.status(400).json({ message: "Ocorreu um erro: " + err });
      });
  });
}

async function getParticipatingList(req, res) {
  User.findOne({ email: req.body.email })
    .lean()
    .then((user) => {
      res.status(200).json({ participatingList: user.participatingList });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro na busca: " + err });
    });
}

async function deleteParticipating(req, res) {
  User.findOne({ email: req.body.email }).then((user) => {
    const newList = user.participatingList.filter((participating) => {
      if (participating.id !== req.body.id) {
        return participating;
      }
    });
    user.participatingList = newList;
    user
      .save()
      .then(() => {
        res
          .status(200)
          .json({ message: "Evento removido à lista de participando" });
      })
      .catch((err) => {
        res.status(400).json({ message: "Ocorreu um erro: " + err });
      });
  });
}

module.exports = {
  addParticipating,
  getParticipatingList,
  deleteParticipating,
};
