import React from "react";
import { Link } from "react-router-dom";
import {
  formatINR,
  formatSignedINR,
  changeColor,
} from "../../../utils/formatters";

const columns = "grid-cols-[1.8fr_0.6fr_1fr_1fr_1.2fr_1.1fr_0.9fr]";

const Holdings = ({ holdings, limit }) => {
  const displayedHoldings = holdings.slice(0, limit);

  return (
    <section className="w-full min-w-0 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-stone-200 px-5 py-4">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-semibold text-stone-900">Holdings</h2>

          <span className="rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-500">
            Showing {displayedHoldings.length} of {holdings.length}
          </span>
        </div>

        <Link
          to="/holdings"
          className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View all
        </Link>
      </div>

      <div className="px-5">
        {/* Table header */}
        <div
          className={`grid ${columns} items-center border-b border-stone-200 py-3 text-[11px] font-semibold uppercase tracking-wide text-stone-400`}
        >
          <span>Symbol</span>
          <span className="text-right">Qty</span>
          <span className="text-right">Avg. price</span>
          <span className="text-right">LTP</span>
          <span className="text-right">Current value</span>
          <span className="text-right">P&L</span>
          <span className="text-right">Day</span>
        </div>

        {/* Empty state */}
        {displayedHoldings.length === 0 && (
          <div className="py-10 text-center">
            <p className="text-sm font-medium text-stone-700">
              No holdings yet
            </p>
            <p className="mt-1 text-xs text-stone-400">
              Your executed holdings will appear here.
            </p>
          </div>
        )}

        {/* Rows */}
        {displayedHoldings.map((stock) => {
          const currentValue = stock.qty * stock.price;
          const invested = stock.qty * stock.avg;
          const pnl = currentValue - invested;

          return (
            <div
              key={stock._id}
              className={`grid ${columns} items-center border-b border-stone-100 py-4 text-sm tabular-nums transition-colors last:border-b-0 hover:bg-stone-50`}
            >
              {/* Symbol */}
              <div className="min-w-0">
                <p className="font-semibold text-stone-900">{stock.name}</p>

                <p className="mt-0.5 text-xs text-stone-400">NSE</p>
              </div>

              {/* Quantity */}
              <span className="text-right font-medium text-stone-700">
                {stock.qty}
              </span>

              {/* Average price */}
              <span className="whitespace-nowrap text-right text-stone-600">
                {formatINR(stock.avg)}
              </span>

              {/* LTP */}
              <span className="whitespace-nowrap text-right font-medium text-stone-800">
                {formatINR(stock.price)}
              </span>

              {/* Current value */}
              <span className="whitespace-nowrap text-right font-medium text-stone-800">
                {formatINR(currentValue)}
              </span>

              {/* P&L */}
              <span
                className={`whitespace-nowrap text-right font-semibold ${changeColor(
                  pnl,
                )}`}
              >
                {formatSignedINR(pnl)}
              </span>

              {/* Day */}
              <span
                className={`whitespace-nowrap text-right font-medium ${changeColor(
                  parseFloat(stock.day),
                )}`}
              >
                {stock.day}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Holdings;
