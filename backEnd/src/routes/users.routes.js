const express = require("express");
const usersController = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/users", authMiddleware, usersController.getAllusers); 
router.post("/users", usersController.createUser);
router.post("/login", usersController.loginUser); 

module.exports = router;
