const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new mongoose.Schema(
  {
    time: {
      type: Date,
      default: Date.now,
    },
    name: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["Buy", "Sell"],
      required: true,
    },
    category: {
      type: String,
      enum: ["Holdings", "Positions"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ["Executed", "Cancelled"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = orderSchema;
