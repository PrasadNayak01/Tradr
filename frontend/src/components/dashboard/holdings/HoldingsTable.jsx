import React from "react";
import {
  formatINR,
  formatSignedINR,
  formatPercent,
  changeColor,
} from "../../../utils/formatters";

const HoldingsTable = ({ holdings }) => {
  return (
    <section className="rounded-md border border-stone-200 bg-white">
      <div className="flex items-baseline justify-between px-5 pt-5 pb-3">
        <h2 className="text-lg font-semibold text-stone-900">Your holdings</h2>
        <span className="text-sm text-stone-500">{holdings.length} stocks</span>
      </div>

      <div className="overflow-x-auto px-5 pb-3">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-xs font-medium text-stone-500">
              <th scope="col" className="py-2 text-left font-medium">
                Stock
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Qty
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Avg. price
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                LTP
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Current value
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                P&L
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Net change
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Day change
              </th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock) => {
              const currentValue = stock.qty * stock.price;
              const invested = stock.qty * stock.avg;
              const pnl = currentValue - invested;
              const pnlPercent = (pnl / invested) * 100;

              return (
                <tr
                  key={stock.symbol}
                  className="border-b border-stone-100 last:border-b-0"
                >
                  <td className="py-3 text-left">
                    <p className="font-medium text-stone-900">{stock.name}</p>
                  </td>

                  <td className="py-3 text-right text-stone-700">
                    {stock.qty}
                  </td>

                  <td className="whitespace-nowrap py-3 text-right text-stone-700">
                    {formatINR(stock.avg)}
                  </td>

                  <td className="whitespace-nowrap py-3 text-right text-stone-700">
                    {formatINR(stock.price)}
                  </td>

                  <td className="whitespace-nowrap py-3 text-right text-stone-700">
                    {formatINR(currentValue)}
                  </td>

                  <td className="whitespace-nowrap py-3 text-right">
                    <p className={`font-medium ${changeColor(pnl)}`}>
                      {formatSignedINR(pnl)}
                    </p>
                    <p className={`text-xs ${changeColor(pnl)}`}>
                      {formatPercent(pnlPercent)}
                    </p>
                  </td>

                  <td
                    className={`whitespace-nowrap py-3 text-right font-medium ${changeColor(
                      parseFloat(stock.net),
                    )}`}
                  >
                    {stock.net}
                  </td>

                  <td
                    className={`whitespace-nowrap py-3 text-right font-medium ${changeColor(
                      parseFloat(stock.day),
                    )}`}
                  >
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HoldingsTable;
