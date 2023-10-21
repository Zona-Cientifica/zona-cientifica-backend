require("dotenv").config();
const express = require("express");
const router = require("./src/routes/routes");
const connectdb = require("./src/database/db")
const port = 3000;

const app = express();
connectdb();

app.use(
  express.urlencoded({
      extended: true,
  }),
);

// models
const User = require("./src/models/User");

// Config JSON response
app.use(express.json());

app.use(router)

app.get('/', (req, res) => {
  res.send('Testandoo')
})

//Routes
app.use('/register', router)

app.use('/login', router)

app.use('/forgot_password', router)

app.use('/edit', router)

app.use('/user', router);

app.use('/registercard', router);

app.use('/posts', router)

//Identificado porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`)
})