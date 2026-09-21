import React from "react";
import { Link } from "react-router-dom";

const Brokerage = () => {
  return (
    <section className="px-6 lg:px-24 py-16 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 mb-14">
        <a
          href="#charges"
          className="text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          List of charges
        </a>

        <a
          href="#calculator"
          className="text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Brokerage calculator
        </a>
      </div>

      <div id="charges" className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900 text-center">
          Transparent charges
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Simple pricing with no complicated fees. Know what you pay before you
          trade or invest with Tradr.
        </p>

        <div className="mt-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-100 pb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Equity delivery
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                No brokerage charges on equity delivery investments.
              </p>
            </div>

            <span className="text-indigo-600 font-medium">₹0</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-100 pb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Intraday trading
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Flat brokerage for every executed intraday order.
              </p>
            </div>

            <span className="text-indigo-600 font-medium">₹20 / order</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-100 pb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Mutual funds
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Invest in direct mutual funds without platform charges.
              </p>
            </div>

            <span className="text-indigo-600 font-medium">₹0</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-100 pb-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Account opening
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Open your Tradr account with no account opening fee.
              </p>
            </div>

            <span className="text-indigo-600 font-medium">Free</span>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-gray-900">
            No hidden surprises
          </h3>

          <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto leading-6">
            Tradr keeps pricing straightforward so you can focus on your
            investments instead of complicated fee structures.
          </p>
        </div>

        <div className="mt-14 text-center" id="calculator">
          <h3 className="text-2xl font-medium text-gray-900">
            Ready to start investing?
          </h3>

          <p className="mt-3 text-gray-500">
            Create your Tradr account and start exploring the markets.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-6 px-7 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Open a Tradr account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brokerage;
