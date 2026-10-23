import React from "react";
import {
  formatINR,
  formatSignedINR,
  formatPercent,
  changeColor,
} from "../../../utils/formatters";

const PositionsTable = ({ positions }) => {
  return (
    <section className="rounded-md border border-stone-200 bg-white">
      <div className="px-5 pt-5 pb-3">
        <h2 className="text-lg font-semibold text-stone-900">Open positions</h2>
      </div>

      <div className="overflow-x-auto px-5 pb-3">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-xs font-medium text-stone-500">
              <th scope="col" className="py-2 text-left font-medium">
                Stock
              </th>
              <th scope="col" className="py-2 text-left font-medium">
                Product
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
            {positions.map((position) => {
              const pnl = (position.price - position.avg) * position.qty;
              const pnlPercent = (pnl / (position.avg * position.qty)) * 100;

              return (
                <tr
                  key={position.name}
                  className="border-b border-stone-100 last:border-b-0"
                >
                  <td className="py-3 text-left">
                    <p className="font-medium text-stone-900">
                      {position.name}
                    </p>
                  </td>

                  <td className="py-3 text-left text-stone-600">
                    {position.product}
                  </td>

                  <td className="py-3 text-right text-stone-700">
                    {position.qty}
                  </td>

                  <td className="whitespace-nowrap py-3 text-right text-stone-700">
                    {formatINR(position.avg)}
                  </td>

                  <td className="whitespace-nowrap py-3 text-right text-stone-700">
                    {formatINR(position.price)}
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
                      parseFloat(position.net),
                    )}`}
                  >
                    {position.net}
                  </td>

                  <td
                    className={`whitespace-nowrap py-3 text-right font-medium ${changeColor(
                      parseFloat(position.day),
                    )}`}
                  >
                    {position.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Empty state */}
        {positions.length === 0 && (
          <p className="py-8 text-center text-sm text-stone-500">
            No open positions today
          </p>
        )}
      </div>
    </section>
  );
};

export default PositionsTable;
