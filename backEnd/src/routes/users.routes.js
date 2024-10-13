const express = require("express");
const usersController = require("../controllers/usersController");
const authMiddleware = require("../Middleware/authMiddleware")

const router = express.Router();

router.get("/users", authMiddleware, usersController.getAllusers); 
router.post("/users", usersController.createUser);
router.post("/login", usersController.loginUser); 
router.delete("/users/:id", usersController.deleteUserById);


module.exports = router;
