const mongoose = require("mongoose");
const positionsSchema = require("../schemas/positionsSchemas");

const positionsModel = mongoose.model("position", positionsSchema);

module.exports = positionsModel;
