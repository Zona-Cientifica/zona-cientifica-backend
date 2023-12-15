const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("../config/multer");
const Post = require("../models/post");
const register = require("../controller/users/register");
const login = require("../controller/users/login");
const forgot_password = require("../controller/users/forgot_password");
const confirmEdit = require("../controller/users/edit_perfil");
const purchaseHistoric = require("../controller/users/purchaseHistoric");
const cardRegister = require("../controller/cardRegister");
const favoriteList = require("../controller/users/favoriteList");
const findEvent = require("../../src/controller/findEvent");
const registerEvent = require("../controller/registerEvent");
const getUser = require("../controller/users/getUser");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
  },
  filename: (req, file, callback) => {
    callback(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post("/login", login);

router.post("/getUser", getUser);

router.post("/register", register);

router.post("/forgot_password", forgot_password);

router.post("/perfil", confirmEdit);

router.get("/events", findEvent.findEvents);

router.post("/event", upload.single("picture"), registerEvent);

router.post("/buyEvent", purchaseHistoric.buyEvent);

router.post("/getPurchaseHistoric", purchaseHistoric.getPurchaseHistoric);

router.post("/cardregister", cardRegister);

router.post("/addFavorite", favoriteList.addFavorite);

router.post("/getFavoriteList", favoriteList.getFavoriteList);

router.post("/deleteFavorite", favoriteList.deleteFavorite);

router.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  const post = await Post.create({
    name: req.file.originalname,
    size: req.file.size,
    key: req.file.filename,
    url: "",
  });
  return res.json();
});

module.exports = router;
