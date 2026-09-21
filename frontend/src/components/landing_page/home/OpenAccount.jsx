import React from "react";

const OpenAccount = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6">
      <h1 className="text-4xl font-medium">Open your Tradr account</h1>

      <p className="mt-4 text-base text-gray-600">
        Start investing with simple tools, transparent pricing, and everything
        you need to manage your portfolio.
      </p>

      <button
        className="mt-7 px-10 py-3 bg-indigo-600 text-white rounded-md
                   hover:bg-indigo-700 transition-colors"
      >
        Get Started
      </button>
    </div>
  );
};

export default OpenAccount;
