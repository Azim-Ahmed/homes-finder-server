const express = require('express');
//controllers
const {
  createOrder,
  getAllOrder,
  deleteOrder,
} = require('../controller/order');

const router = express.Router();
//routers
router.post('/order/create', createOrder);
router.delete('/order/delete/:id', deleteOrder);
router.get('/order/getAllOrders', getAllOrder);

module.exports = router;
