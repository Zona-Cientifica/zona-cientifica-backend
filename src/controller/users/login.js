require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

async function login(req, res) {
    const { email, password } = req.body;
  
    // validations
    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }
  
    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
  
    // check if user exists
    const user = await User.findOne({ email: email });
  
    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }
  
    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password);
  
    if (!checkPassword) {
      return res.status(422).json({ msg: "Senha inválida" });
    }
  
    try {
      res.status(200).json({ msg: "Autenticação realizada com sucesso!"});
    } catch (error) {
      res.status(500).json({ msg: "Error na autentiação" });
    }
  };


  module.exports = login;
  