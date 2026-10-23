const express = require("express");
const router = express.Router({ mergeParams: true });

const { allHoldings } = require("../controllers/holdingsControllers");

router.route("/holdings").get(allHoldings);

module.exports = router;
