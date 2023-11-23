const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userControllers");

//router object
const router = express.Router();

router.get("/all-user", getAllUsers);

router.post("/register", registerController);

router.post("/login", loginController);

module.exports = router;
