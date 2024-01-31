var express = require("express");
var router = express.Router();
const orderController = require("../controller/orderController");
var verif = require("../library/verif");

router.get("/getAllOrder", orderController.getAllOrder);
//GET getOrderById(order_id)
//POST createOrder(object produk)
//PUT editOrder(order_id, object produk)
//DELETE deleteOrder(order_id)
module.exports = router;