const axios = require("axios");

const getMarketIndices = async (req, res) => {
  try {
    // NIFTY 50
    const niftyResponse = await axios.get(
      "https://www.nseindia.com/api/allIndices",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/154.0.0.0 Safari/537.36",
          Accept: "application/json",
          Referer: "https://www.nseindia.com/",
        },
        timeout: 10000,
      },
    );

    const nifty = niftyResponse.data.data.find(
      (index) => index.index === "NIFTY 50",
    );

    // SENSEX
    const sensexResponse = await axios.get(
      "https://api.bseindia.com/RealTimeBseIndiaAPI/api/GetSensexData/w",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "application/json",
          Referer: "https://www.bseindia.com/",
        },
        timeout: 10000,
      },
    );

    const sensex = sensexResponse.data[0];

    res.json({
      nifty50: nifty
        ? {
            name: "NIFTY 50",
            price: nifty.last,
            change: nifty.variation,
            percentChange: nifty.percentChange,
          }
        : null,

      sensex: sensex
        ? {
            name: "SENSEX",
            price: Number(sensex.ltp.replace(/,/g, "")),
            change: Number(sensex.chg.replace(/,/g, "")),
            percentChange: Number(sensex.perchg.replace(/,/g, "")),
          }
        : null,
    });
  } catch (err) {
    console.log("Market Indices Error:", err.message);

    res.status(500).json({
      message: "Failed to fetch market indices",
    });
  }
};

module.exports = { getMarketIndices };
