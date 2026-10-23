const express = require("express");
const router = express.Router({ mergeParams: true });

const { getStock } = require("../controllers/stockControllers");

router.route("/stock/:symbol").get(getStock);

module.exports = router;
