const express = require("express");
const router = express.Router();

const { topGainers, topLoosers } = require("../controllers/topControllers");

router.route("/markets/gainers").get(topGainers);
router.route("/markets/loosers").get(topLoosers);

module.exports = router;
