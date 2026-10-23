const ordersModel = require("../models/ordersModel");

const fetchOrders = async (req, res) => {
  let orders = await ordersModel.find({});
  res.json(orders);
};

const addOrders = async (req, res) => {
  try {
    const { name, type, category, quantity, price, status } = req.body;

    let order = await ordersModel.insertOne({
      name,
      type,
      category,
      quantity,
      price,
      status,
    });

    res.json(order);
  } catch (err) {
    res.json(`Error: ${err}`);
  }
};

module.exports = { fetchOrders, addOrders };
