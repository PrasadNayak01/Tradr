const mongoose = require("mongoose");
const watchlistSchema = require("../schemas/watchlistSchema");

const watchlistModel = mongoose.model("watchlist", watchlistSchema);

module.exports = watchlistModel;
