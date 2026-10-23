import React from "react";

const Summary = () => {
  return (
    <section className="px-7 pb-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr_1fr]">
        {/* Main card */}
        <div className="rounded-md border border-stone-200 bg-white px-6 py-5">
          <p className="text-sm text-stone-500">Total holdings value</p>

          <p className="mt-2 text-4xl font-semibold tabular-nums text-stone-900">
            ₹1,55,430
          </p>

          <p className="mt-2 text-sm tabular-nums text-stone-500">
            <span className="font-medium text-emerald-700">
              +₹12,340 (+8.62%)
            </span>{" "}
            overall · Invested ₹1,43,090
          </p>
        </div>

        {/* Today's P&L */}
        <div className="rounded-md border border-stone-200 bg-white px-6 py-5">
          <p className="text-sm text-stone-500">Today's P&L</p>

          <p className="mt-2 text-2xl font-semibold tabular-nums text-emerald-700">
            +₹3,120
          </p>

          <p className="mt-2 text-sm tabular-nums text-stone-500">
            +2.05% today
          </p>
        </div>

        {/* Funds */}
        <div className="rounded-md border border-stone-200 bg-white px-6 py-5">
          <p className="text-sm text-stone-500">Available funds</p>

          <p className="mt-2 text-2xl font-semibold tabular-nums text-stone-900">
            ₹74,230
          </p>

          <p className="mt-2 text-sm text-stone-500">Available to trade</p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
