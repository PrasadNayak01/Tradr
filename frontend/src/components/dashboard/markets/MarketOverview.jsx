import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  formatNumber,
  formatPercent,
  changeColor,
} from "../../../utils/formatters";

const MarketOverview = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchMarketIndices = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/markets/indices",
        );

        setData(response.data);
      } catch (err) {
        console.log("Market overview error:", err);
      }
    };

    fetchMarketIndices();
  }, []);

  const indices = [data.nifty50, data.sensex].filter(Boolean);

  return (
    <section className="px-7 pb-5">
      <div className="grid grid-cols-1 overflow-hidden rounded-md border border-stone-200 bg-white md:grid-cols-2">
        {indices.map((index) => (
          <div
            key={index.name}
            className="px-6 py-5 md:border-r md:border-stone-200 md:last:border-r-0"
          >
            <p className="text-sm text-stone-500">{index.name}</p>

            <p className="mt-1 text-2xl font-semibold tracking-tight tabular-nums text-stone-900">
              {formatNumber(index.price)}
            </p>

            <p
              className={`mt-1 text-sm font-medium tabular-nums ${changeColor(
                index.change,
              )}`}
            >
              {index.change >= 0 ? "+" : ""}
              {formatNumber(index.change)} ({formatPercent(index.percentChange)}
              )
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketOverview;
