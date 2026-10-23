import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatINR } from "../../../utils/formatters";
import axios from "axios";

const columns = "grid-cols-[1.8fr_1fr_1fr_1fr_1fr_1.2fr]";

const PopularStocks = ({ symbols = [], setSymbols }) => {
  const [stocks, setStocks] = useState([]);

  const popularSymbols = [
    "RELIANCE",
    "TCS",
    "INFY",
    "HDFCBANK",
    "ICICIBANK",
    "SBIN",
  ];

  useEffect(() => {
    const fetchPopularStocks = async () => {
      try {
        const responses = await Promise.all(
          popularSymbols.map((symbol) =>
            axios.get(`http://localhost:3000/api/stock/${symbol}`),
          ),
        );

        const data = responses.map((response) => response.data);

        setStocks(data);
      } catch (err) {
        console.log("Popular stocks error:", err);
      }
    };

    fetchPopularStocks();
  }, []);

  const addToWatchlist = async (symbol) => {
    try {
      await axios.post("http://localhost:3000/api/watchlist/new", { symbol });
      setSymbols((prev) => [...prev, symbol]);
      window.location.href = "/watchlist";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="w-full rounded-md border border-stone-200 bg-white">
      <div className="px-5 pb-3 pt-5">
        <h2 className="text-lg font-semibold text-stone-900">Popular stocks</h2>
      </div>

      <div className="px-5 pb-3">
        <div
          className={`grid ${columns} items-center border-b border-stone-200 py-2 text-xs font-medium text-stone-500`}
        >
          <span>Stock</span>
          <span>Exchange</span>
          <span className="text-right">LTP</span>
          <span className="text-right">Day High</span>
          <span className="text-right">Day Low</span>
          <span className="text-right">Action</span>
        </div>

        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className={`grid ${columns} items-center border-b border-stone-100 py-3 text-sm tabular-nums transition-colors last:border-b-0 hover:bg-stone-50`}
          >
            <div className="min-w-0">
              <Link
                to={`/stock/${stock.symbol}`}
                className="font-medium text-stone-900 hover:text-indigo-600"
              >
                {stock.symbol}
              </Link>

              <p className="truncate text-xs text-stone-500">NSE</p>
            </div>

            <span className="text-stone-600">NSE</span>

            <span className="whitespace-nowrap text-right text-stone-700">
              {formatINR(stock.price)}
            </span>

            <span className="whitespace-nowrap text-right text-stone-700">
              {formatINR(stock.dayHigh)}
            </span>

            <span className="whitespace-nowrap text-right text-stone-700">
              {formatINR(stock.dayLow)}
            </span>

            <div className="text-right">
              {symbols.filter((symbol) => symbol == stock.symbol).length > 0 ? (
                <button
                  type="button"
                  disabled
                  className="rounded-md border border-stone-200 bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-400"
                >
                  Added
                </button>
              ) : (
                <button
                  type="button"
                  className="rounded-md border border-indigo-200 px-3 py-1.5 text-sm font-medium text-indigo-600 transition-colors hover:bg-indigo-50"
                  onClick={(e) => {
                    e.preventDefault();
                    addToWatchlist(stock.symbol);
                  }}
                >
                  Add to Watchlist
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularStocks;
