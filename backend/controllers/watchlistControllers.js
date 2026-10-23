const watchlistModel = require("../models/watchlistModel");

const addWatchlist = async (req, res) => {
  try {
    const { symbol } = req.body;
    const watchlist = new watchlistModel({ symbol });

    await watchlist.save();
    res.status(200).json("Added Successfully");
  } catch (err) {
    if (err.code === 11000) {
      return res.json("Already Added");
    }
    res.json(err.code);
  }
};

const fetchWatchlist = async (req, res) => {
  try {
    const watchlist = await watchlistModel.find({});
    res.json(watchlist);
  } catch (err) {
    res.status(400).json("Something went wrong. Try Again...");
  }
};

const deleteWatchlist = async (req, res) => {
  try {
    const { symbol } = req.params;

    await watchlistModel.deleteOne({ symbol: symbol.toUpperCase() });

    res.json("Deleted");
  } catch (err) {
    console.log(`Went wrong in delete watchlist ${err}`);
    res.json("Went wrong in delete Watchlist");
  }
};

module.exports = { addWatchlist, fetchWatchlist, deleteWatchlist };
