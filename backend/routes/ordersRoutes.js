const express = require("express");
const router = express.Router({ mergeParams: true });

const { fetchOrders, addOrders } = require("../controllers/ordersControllers");

router.route("/orders").get(fetchOrders);
router.route("/orders/new").post(addOrders);

module.exports = router;
