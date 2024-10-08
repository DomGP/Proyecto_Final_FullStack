const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/users", usersController.getAllusers);

router.post("/users", usersController.createUser);

module.exports = router;
