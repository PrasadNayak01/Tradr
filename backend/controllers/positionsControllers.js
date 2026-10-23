const positionsModel = require("../models/positionsModel");

const allPositions = async (req, res) => {
  let positions = await positionsModel.find({});
  res.json(positions);
};

module.exports = { allPositions };
