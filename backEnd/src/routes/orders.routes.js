const express = require('express')
const ordersController = require('../controllers/ordersController')

const router = express.Router()

router.post('/create', ordersController.createOrder)

router.post('/agregar', ordersController.addOrderDetail)

router.get('/getorder', ordersController.getOrderById)

module.exports = router