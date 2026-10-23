const axios = require("axios");

const topGainers = async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.nseindia.com/api/live-analysis-variations?index=gainers",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          Referer: "https://www.nseindia.com/",
          "Accept-Language": "en-US,en;q=0.9",
        },
        timeout: 10000,
      },
    );

    const topGainers = [];

    response.data.NIFTY.data.map((stock) => {
      topGainers.push({
        name: stock.symbol,
        price: stock.ltp,
        percentChange: stock.perChange,
      });
    });

    res.json(topGainers);
  } catch (err) {
    console.log(err);
  }
};

const topLoosers = async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.nseindia.com/api/live-analysis-variations?index=loosers",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          Referer: "https://www.nseindia.com/",
          "Accept-Language": "en-US,en;q=0.9",
        },
        timeout: 10000,
      },
    );

    const topLoosers = [];

    response.data.NIFTY.data.map((stock) => {
      topLoosers.push({
        name: stock.symbol,
        price: stock.ltp,
        percentChange: stock.perChange,
      });
    });

    res.json(topLoosers);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { topGainers, topLoosers };
