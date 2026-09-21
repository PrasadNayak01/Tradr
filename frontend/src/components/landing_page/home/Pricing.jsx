import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-16 py-16">
      {/* Pricing Content */}
      <div className="w-full lg:w-1/2 max-w-xl">
        <h2 className="text-3xl font-semibold">Simple, transparent pricing</h2>

        <p className="mt-6 max-w-md text-sm text-gray-600 leading-6">
          Trade and invest without worrying about complicated fees. Clear
          pricing with no hidden surprises.
        </p>

        <Link
          to="/pricing"
          className="inline-block mt-5 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          View pricing →
        </Link>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col sm:flex-row w-full lg:w-1/2 max-w-xl">
        <div className="flex-1 p-8 border border-gray-200">
          <h3 className="text-center text-3xl font-semibold">₹0</h3>

          <p className="mt-5 text-center text-sm text-gray-600 leading-6">
            Equity delivery & mutual funds.
            <br />
            No platform fee for long-term investing.
          </p>
        </div>

        <div className="flex-1 p-8 border border-gray-200 sm:border-l-0">
          <h3 className="text-center text-3xl font-semibold">₹20</h3>

          <p className="mt-5 text-center text-sm text-gray-600 leading-6">
            Intraday & F&O.
            <br />
            Simple, transparent pricing for active trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
