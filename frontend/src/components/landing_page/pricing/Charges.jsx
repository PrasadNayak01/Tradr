import React from "react";

const Charges = () => {
  const charges = [
    {
      price: "₹0",
      title: "Free equity delivery",
      description:
        "All equity delivery investments (NSE, BSE) are absolutely free - ₹ 0 brokerage.",
    },
    {
      price: "₹20",
      title: "Intraday and F&O trades",
      description:
        "Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.",
    },
    {
      price: "₹0",
      title: "Free direct mutual funds",
      description:
        "All direct mutual fund investments are absolutely free - ₹ 0 brokerage.",
    },
  ];

  return (
    <section className="px-6 lg:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {charges.map((charge, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-7xl md:text-8xl font-medium text-amber-500">
              {charge.price}
            </h2>

            <h3 className="mt-8 text-2xl font-medium text-gray-900">
              {charge.title}
            </h3>

            <p className="mt-4 max-w-xs text-gray-500 leading-6">
              {charge.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Charges;
