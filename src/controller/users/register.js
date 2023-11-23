const bcrypt = require("bcrypt");
const User = require("../../models/User");


async function register(req, res) {
    const { name, email, password, telefone, apelido, favoriteList, participatingList} = req.body;
  
    // validations
    if (!name) {
      return res.status(422).json({ msg: "O nome é obrigatório!" });
    }
  
    if (!email) {
      return res.status(422).json({ msg: "O email é obrigatório!" });
    }
  
    if (!password) {
      return res.status(422).json({ msg: "A senha é obrigatória!" });
    }
  
    // check if user exists
    const userExists = await User.findOne({ email: email });
  
    if (userExists) {
      return res.status(422).json({ msg: "Por favor, utilize outro e-mail!" });
    }
  
    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
  
    // create user
    const user = new User({
      name,
      email,
      telefone,
      apelido,
      password: passwordHash,
      favoriteList,
      participatingList
    });
  
    try {
      await user.save();
  
      res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  };
  
  module.exports = register;