const mongoose = require("mongoose");
const ordersSchema = require("../schemas/ordersSchema");

const ordersModel = mongoose.model("order", ordersSchema);

module.exports = ordersModel;
