const Card = require("../models/Card")


async function cardRegister(req, res) {
    const { name, numero, validade, cvc, bandeira } = req.body;
  
    // validations
    if (!name) {
      return res.status(422).json({ msg: "O nome é obrigatório!" });
    }
  
    if (!numero) {
      return res.status(422).json({ msg: "O numero é obrigatório!" });
    }
  
    if (!validade) {
      return res.status(422).json({ msg: "A validade é obrigatória!" });
    }

    if (!cvc) {
      return res.status(422).json({ msg: "O cvc é obrigatória!" });
    }

    if (!bandeira) {
      return res.status(422).json({ msg: "A bandeira é obrigatória!" });
    }
  
    // check if card exists
    const cardExists = await Card.findOne({ numero: numero });
  
    if (cardExists) {
      return res.status(422).json({ msg: "Por favor, utilize outro Cartão!" });
    }
  
    // create card
    const card = new Card({
      name,
      numero,
      validade,
      cvc,
      bandeira
    });
  
    try {
      await card.save();
  
      res.status(201).json({ msg: "Cartão criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
  
  module.exports = cardRegister;