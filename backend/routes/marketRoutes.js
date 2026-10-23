const express = require("express");
const router = express.Router();
const { getMarketIndices } = require("../controllers/marketControllers");

router.route("/markets/indices").get(getMarketIndices);

module.exports = router;
