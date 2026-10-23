require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");

const holdingsModel = require("../models/holdingsModel.js");
const positionsModel = require("../models/positionsModel.js");
const ordersModel = require("../models/ordersModel.js");

const {
  holdings,
  positions,
  orders,
} = require("../../frontend/src/data/data.js");

const initDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("DB Connected");

    await holdingsModel.deleteMany({});
    await positionsModel.deleteMany({});
    await ordersModel.deleteMany({});

    await holdingsModel.insertMany(holdings);
    await positionsModel.insertMany(positions);
    await ordersModel.insertMany(orders);

    console.log("Sample Data was Initialized");
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
};

initDB();
