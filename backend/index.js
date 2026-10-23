require("dotenv").config();

// Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

//Routes
const holdingsRoutes = require("./routes/holdingsRoutes");
const positionsRoutes = require("./routes/positionsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const stockRoutes = require("./routes/stockRoutes");
const topRoutes = require("./routes/topRoutes");
const marketRoutes = require("./routes/marketRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

main()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}

app.use("/api", holdingsRoutes);
app.use("/api", positionsRoutes);
app.use("/api", ordersRoutes);
app.use("/api", stockRoutes);
app.use("/api", topRoutes);
app.use("/api", marketRoutes);
app.use("/api", watchlistRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port}`);
});
