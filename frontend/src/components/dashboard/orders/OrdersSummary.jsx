import React from "react";

const OrdersSummary = ({ orders }) => {
  const executed = orders.filter((order) => order.status === "Executed").length;
  const open = orders.filter((order) => order.status === "Open").length;
  const cancelled = orders.filter(
    (order) => order.status === "Cancelled",
  ).length;

  const items = [
    { label: "Total orders", value: orders.length },
    { label: "Executed", value: executed },
    { label: "Open", value: open },
    { label: "Cancelled", value: cancelled },
  ];

  return (
    <section className="px-7 pb-4">
      <div className="grid grid-cols-2 gap-4 rounded-md border border-stone-200 bg-white p-5 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs text-stone-500">{item.label}</p>
            <p className="mt-1 text-2xl font-semibold text-stone-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersSummary;
