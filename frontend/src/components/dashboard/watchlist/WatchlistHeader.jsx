import React from "react";

const WatchlistHeader = () => {
  return (
    <section className="flex items-start justify-between px-7 pt-7 pb-5">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Watchlist</h1>

        <p className="mt-1 text-base text-gray-600">
          Track and monitor your favorite stocks.
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-600">NSE</p>

        <p className="mt-1 text-sm text-gray-600">Market Watch</p>
      </div>
    </section>
  );
};

export default WatchlistHeader;
