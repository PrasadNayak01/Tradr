import React from "react";

const HoldingsSummary = ({ holdings }) => {
  let invested = 0;
  let current = 0;

  holdings.forEach((stock) => {
    invested += stock.qty * stock.avg;
    current += stock.qty * stock.price;
  });

  const pnl = current - invested;
  const pnlPercent = (pnl / invested) * 100;

  const sign = pnl >= 0 ? "+" : "-";
  const pnlColor = pnl >= 0 ? "text-emerald-700" : "text-rose-600";

  const money = (amount) =>
    amount.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  return (
    <section className="px-7 pb-4">
      <div className="grid grid-cols-1 gap-4 rounded-md border border-stone-200 bg-white p-5 md:grid-cols-3">
        <div>
          <p className="text-sm text-stone-500">Current value</p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">
            ₹{money(current)}
          </p>
        </div>

        <div>
          <p className="text-sm text-stone-500">Invested</p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">
            ₹{money(invested)}
          </p>
        </div>

        <div>
          <p className="text-sm text-stone-500">Total P&L</p>
          <p className={`mt-1 text-2xl font-semibold ${pnlColor}`}>
            {sign}₹{money(Math.abs(pnl))}
          </p>
          <p className={`mt-1 text-sm ${pnlColor}`}>
            {sign}
            {Math.abs(pnlPercent).toFixed(2)}%
          </p>
        </div>
      </div>
    </section>
  );
};

export default HoldingsSummary;
