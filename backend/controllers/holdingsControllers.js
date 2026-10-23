const holdingsModel = require("../models/holdingsModel");

const allHoldings = async (req, res) => {
  let holdings = await holdingsModel.find({});
  res.json(holdings);
};

module.exports = { allHoldings };
