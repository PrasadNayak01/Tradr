const express = require("express");
const router = express.Router({ mergeParams: true });

const { allPositions } = require("../controllers/positionsControllers");

router.route("/positions").get(allPositions);

module.exports = router;
