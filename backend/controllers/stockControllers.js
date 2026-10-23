const axios = require("axios");

const getStock = async (req, res) => {
  try {
    const { symbol } = req.params;

    const now = Math.floor(Date.now() / 1000);

    const oneDayAgo = now - 24 * 60 * 60;

    const response = await axios.get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}.NS`,
      {
        params: {
          period1: oneDayAgo,
          period2: now,
          interval: "5m",
        },
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      },
    );

    const result = response.data.chart.result[0];
    const meta = result.meta;

    const quote = result.indicators.quote[0];

    const prices = quote.close.filter((price) => price !== null);

    const currentPrice = meta.regularMarketPrice;
    const previousClose = meta.previousClose;

    const chartData = result.timestamp
      .map((time, index) => ({
        time: new Date(time * 1000).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        price: quote.close[index],
      }))
      .filter((item) => item.price !== null);

    res.json({
      symbol: symbol.toUpperCase(),
      price: currentPrice,
      percentChange: ((currentPrice - previousClose) / previousClose) * 100,
      previousClose,
      open: quote.open[quote.open.length - 1],
      dayHigh: meta.regularMarketDayHigh,
      dayLow: meta.regularMarketDayLow,
      week52High: meta.fiftyTwoWeekHigh,
      week52Low: meta.fiftyTwoWeekLow,
      volume: meta.regularMarketVolume,
      chart: chartData,
    });
  } catch (err) {
    console.log("Yahoo Finance Error:", err.response?.data || err.message);

    res.status(500).json({
      message: "Failed to fetch stock data",
    });
  }
};

module.exports = { getStock };
