import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatINR } from "../../../utils/formatters";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WatchlistTable = ({ stocks, setStocks }) => {
  const handleDelete = async (symbol) => {
    try {
      await axios.delete(`http://localhost:3000/api/watchlist/${symbol}`);
      setStocks((prevStocks) =>
        prevStocks.filter((stock) => stock.symbol !== symbol),
      );
      toast.success("Deleted Successfully");
    } catch {
      toast.error("Something went wrong. Try again");
    }
  };

  return (
    <section className="w-full rounded-lg border border-gray-200 bg-white">
      <ToastContainer />
      <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr_0.6fr] items-center rounded-t-lg bg-gray-50 px-5 py-3 text-xs font-medium text-gray-600">
        <span>Stock</span>
        <span className="text-center">Price</span>
        <span className="text-center">Day Low</span>
        <span className="text-center">Day High</span>
        <span className="text-right">Action</span>
      </div>

      <div>
        {stocks.length == 0 && (
          <div>
            <p className="opacity-75 text-center py-6">Watchlist is Empty...</p>
          </div>
        )}
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            className="grid grid-cols-[1.7fr_1fr_1fr_1fr_0.6fr] items-center border-b border-gray-100 px-5 py-4 last:border-b-0"
          >
            <div>
              <Link
                to={`/stock/${stock.symbol}`}
                className="font-medium text-stone-900 hover:text-indigo-600"
              >
                <p className="text-sm font-medium text-gray-800">
                  {stock.symbol}
                </p>
              </Link>
            </div>

            <span className="whitespace-nowrap text-center text-sm text-gray-700">
              {formatINR(stock.price)}
            </span>

            <span className="whitespace-nowrap text-center text-sm text-gray-700">
              {formatINR(stock.dayLow)}
            </span>

            <span className="whitespace-nowrap text-center text-sm text-gray-700">
              {formatINR(stock.dayHigh)}
            </span>

            <div className="flex items-center justify-end">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                title="Remove from watchlist"
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(stock.symbol);
                }}
              >
                <FontAwesomeIcon icon={faTrash} className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchlistTable;
