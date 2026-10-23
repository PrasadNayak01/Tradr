import React from "react";
import { formatINR } from "../../../utils/formatters";

const FundsSummary = ({ funds }) => {
  const total = funds.available + funds.usedMargin;

  return (
    <section className="px-7 pb-4">
      <div className="grid grid-cols-1 gap-4 rounded-md border border-stone-200 bg-white p-5 md:grid-cols-3">
        <div>
          <p className="text-sm text-stone-500">Available funds</p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">
            {formatINR(funds.available)}
          </p>
        </div>

        <div>
          <p className="text-sm text-stone-500">Used margin</p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">
            {formatINR(funds.usedMargin)}
          </p>
        </div>

        <div>
          <p className="text-sm text-stone-500">Total balance</p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">
            {formatINR(total)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundsSummary;
