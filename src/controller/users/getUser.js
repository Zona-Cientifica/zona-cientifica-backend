require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

async function getUser(req, res) {
  const { email } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ msg: "O email é obrigatório!" });
  }

  // check if user exists
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "Usuário não encontrado!" });
  }

  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: "Error na autentiação" });
  }
}

module.exports = getUser;
