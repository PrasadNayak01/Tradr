import React from "react";
import { formatSignedINR, changeColor } from "../../../utils/formatters";

const FundsTransactions = ({ transactions }) => {
  return (
    <section className="rounded-md border border-stone-200 bg-white">
      <div className="px-5 pt-5 pb-3">
        <h2 className="text-lg font-semibold text-stone-900">
          Recent transactions
        </h2>
      </div>

      <div className="overflow-x-auto px-5 pb-3">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-stone-200 text-xs font-medium text-stone-500">
              <th scope="col" className="py-2 text-left font-medium">
                Date
              </th>
              <th scope="col" className="py-2 text-left font-medium">
                Description
              </th>
              <th scope="col" className="py-2 text-left font-medium">
                Type
              </th>
              <th scope="col" className="py-2 text-right font-medium">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr
                key={item.id}
                className="border-b border-stone-100 last:border-b-0"
              >
                <td className="whitespace-nowrap py-3 text-left text-stone-500">
                  {item.date}
                </td>

                <td className="py-3 text-left font-medium text-stone-900">
                  {item.description}
                </td>

                <td className="py-3 text-left text-stone-600">{item.type}</td>

                <td
                  className={`whitespace-nowrap py-3 text-right font-medium ${changeColor(
                    item.amount,
                  )}`}
                >
                  {formatSignedINR(item.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty state */}
        {transactions.length === 0 && (
          <p className="py-8 text-center text-sm text-stone-500">
            No transactions yet
          </p>
        )}
      </div>
    </section>
  );
};

export default FundsTransactions;
