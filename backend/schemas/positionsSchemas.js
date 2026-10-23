const mongoose = require("mongoose");

const { Schema } = mongoose;

const positionsSchema = new Schema(
  {
    product: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    avg: {
      type: Number,
      required: true,
      min: 0,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    net: {
      type: String,
      required: true,
    },

    day: {
      type: String,
      required: true,
    },

    isLoss: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = positionsSchema;
