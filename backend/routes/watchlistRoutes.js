const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  addWatchlist,
  fetchWatchlist,
  deleteWatchlist,
} = require("../controllers/watchlistControllers");

router.route("/watchlist/new").post(addWatchlist);
router.route("/watchlist").get(fetchWatchlist);
router.route("/watchlist/:symbol").delete(deleteWatchlist);

module.exports = router;
