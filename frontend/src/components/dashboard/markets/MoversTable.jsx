import React from "react";
import {
  formatINR,
  formatPercent,
  changeColor,
} from "../../../utils/formatters";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const columns = "grid-cols-[1.6fr_1fr_0.8fr_1.2fr]";

const MoversTable = ({ title, stocks = [], symbols = [], setSymbols }) => {
  const addToWatchlist = async (symbol) => {
    try {
      await axios.post("http://localhost:3000/api/watchlist/new", { symbol });
      setSymbols((prev) => [...prev, symbol]);
      window.location.href = "/watchlist";
    } catch {
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <section className="w-full min-w-0 rounded-md border border-stone-200 bg-white">
      <ToastContainer />
      <div className="flex items-baseline justify-between px-5 pt-5 pb-3">
        <h2 className="text-lg font-semibold text-stone-900">{title}</h2>
        <span className="text-sm text-stone-500">Today</span>
      </div>

      <div className="px-5 pb-3">
        <div
          className={`grid ${columns} items-center border-b border-stone-200 py-2 text-xs font-medium text-stone-500`}
        >
          <span>Stock</span>
          <span className="text-right">LTP</span>
          <span className="text-right">Change</span>
          <span className="py-3 text-right">Action</span>
        </div>

        {stocks.map((stock) => (
          <Link
            key={stock.name}
            to={`/stock/${stock.name}`}
            className={`grid ${columns} items-center border-b border-stone-100 py-3 text-sm tabular-nums last:border-b-0`}
          >
            <div className="min-w-0">
              <p className="font-medium text-stone-900">{stock.name}</p>
            </div>

            <span className="whitespace-nowrap text-right text-stone-700">
              {formatINR(stock.price)}
            </span>

            <span
              className={`whitespace-nowrap text-right font-medium ${changeColor(
                stock.percentChange,
              )}`}
            >
              {formatPercent(stock.percentChange)}
            </span>

            <span className="text-right">
              {symbols.filter((symbol) => symbol == stock.name).length > 0 ? (
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
                    addToWatchlist(stock.name);
                  }}
                >
                  Add to Watchlist
                </button>
              )}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MoversTable;
