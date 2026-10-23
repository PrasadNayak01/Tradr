const mongoose = require("mongoose");
const { Schema } = mongoose;

const watchlistSchema = new Schema({
  symbol: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
  },
});

watchlistSchema.index({ symbol: 1 }, { unique: true });

module.exports = watchlistSchema;
