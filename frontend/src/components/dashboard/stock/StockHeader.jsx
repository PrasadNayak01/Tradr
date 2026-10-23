import React from "react";
import { formatINR } from "../../../utils/formatters";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const StockHeader = ({ stock, setSymbols }) => {
  const addToWatchlist = async (symbol) => {
    try {
      await axios.post("http://localhost:3000/api/watchlist/new", { symbol });
      setSymbols((prev) => [...prev, symbol]);
      window.location.href = "/watchlist";
    } catch {
      toast.error("Something went wrong. Try again");
    }
  };
  if (!stock) {
    return (
      <section className="px-7 py-6">
        <p className="text-sm text-stone-500">Loading stock...</p>
      </section>
    );
  }

  return (
    <section className="flex items-start justify-between border-stone-200 px-7 py-6">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-stone-900">
            {stock.symbol}
          </h1>

          <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
            NSE
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-2xl font-semibold text-stone-900">
            {formatINR(stock.price)}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
          onClick={(e) => {
            e.preventDefault();
            addToWatchlist(stock.symbol);
          }}
        >
          + Watchlist
        </button>
      </div>
    </section>
  );
};

export default StockHeader;
