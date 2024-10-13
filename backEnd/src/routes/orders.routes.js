const express = require("express");
const ordersController = require("../controllers/ordersController");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, ordersController.createOrder);

router.post("/agregar", authMiddleware, ordersController.addOrderDetail);

router.get("/getorder", authMiddleware, ordersController.getOrderById);

router.get("/getorders", authMiddleware, ordersController.getAllOrders);


module.exports = router;
