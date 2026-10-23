import React from "react";
import { formatINR } from "../../../utils/formatters";

const StockOverview = ({ stock }) => {
  if (!stock) {
    return null;
  }

  const items = [
    {
      label: "Open",
      value: formatINR(stock.open),
    },
    {
      label: "Day high",
      value: formatINR(stock.dayHigh),
    },
    {
      label: "Day low",
      value: formatINR(stock.dayLow),
    },
    {
      label: "52W high",
      value: formatINR(stock.week52High),
    },
    {
      label: "52W low",
      value: formatINR(stock.week52Low),
    },
  ];

  return (
    <section className="px-7 pb-5">
      <div className="grid grid-cols-2 gap-y-5 rounded-lg border border-stone-200 bg-white px-6 py-5 md:grid-cols-3 md:gap-y-0 xl:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="border-stone-200 px-5 first:pl-0 md:border-r md:last:border-r-0"
          >
            <p className="text-sm text-stone-500">{item.label}</p>

            <p className="mt-2 text-lg font-semibold tracking-tight text-stone-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StockOverview;
