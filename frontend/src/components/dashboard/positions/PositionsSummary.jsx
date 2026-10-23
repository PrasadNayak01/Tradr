import React from "react";
import {
  formatINR,
  formatSignedINR,
  formatPercent,
  changeColor,
} from "../../../utils/formatters";

const PositionsSummary = ({ positions }) => {
  let invested = 0;
  let current = 0;

  positions.forEach((position) => {
    invested += position.qty * position.avg;
    current += position.qty * position.price;
  });

  const pnl = current - invested;
  const pnlPercent = invested > 0 ? (pnl / invested) * 100 : 0;

  return (
    <section className="px-7 pb-4">
      <div className="grid grid-cols-1 gap-4 rounded-md border border-stone-200 bg-white p-5 md:grid-cols-3">
        <div>
          <p className="text-sm text-stone-500">Open positions</p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">
            {positions.length}
          </p>
        </div>

        <div>
          <p className="text-sm text-stone-500">Invested</p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">
            {formatINR(invested)}
          </p>
        </div>

        <div>
          <p className="text-sm text-stone-500">Total P&L</p>
          <p className={`mt-1 text-2xl font-semibold ${changeColor(pnl)}`}>
            {formatSignedINR(pnl)}
          </p>
          <p className={`mt-1 text-sm ${changeColor(pnl)}`}>
            {formatPercent(pnlPercent)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PositionsSummary;
