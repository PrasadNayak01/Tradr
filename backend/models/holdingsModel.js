const mongoose = require("mongoose");
const holdingsSchema = require("../schemas/holdingsSchema");

const holdingsModel = mongoose.model("holding", holdingsSchema);

module.exports = holdingsModel;
