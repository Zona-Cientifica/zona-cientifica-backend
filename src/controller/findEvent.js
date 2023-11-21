const Event = require("../models/Event");

async function findEvents(req, res) {
  let events = await Event.find().lean()
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro na busca: " + err });
    });
}

module.exports = { findEvents };
