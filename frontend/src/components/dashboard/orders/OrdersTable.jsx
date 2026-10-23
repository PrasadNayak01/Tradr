import React from "react";

const statusColor = {
  Executed: "text-emerald-700",
  Open: "text-stone-600",
  Cancelled: "text-rose-600",
};

const columns = "grid-cols-[1fr_1.4fr_0.8fr_0.8fr_1.2fr_1fr]";

const OrdersTable = ({ orders }) => {
  return (
    <section className="rounded-md border border-stone-200 bg-white">
      <div className="px-5 pb-3">
        <div
          className={`grid ${columns} items-center border-b border-stone-200 py-2 mt-3 text-xs font-medium text-stone-500`}
        >
          <span>Time</span>
          <span>Stock</span>
          <span>Type</span>
          <span className="text-right">Qty</span>
          <span className="text-right">Price</span>
          <span className="text-right">Status</span>
        </div>

        {orders.map((order) => (
          <div
            key={order.id}
            className={`grid ${columns} items-center border-b border-stone-100 py-3.5 text-sm last:border-b-0`}
          >
            <span className="text-stone-500">
              {new Date(order.time).toLocaleString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>

            <span className="font-medium text-stone-900">{order.name}</span>

            <span
              className={
                order.type === "Buy" ? "text-emerald-700" : "text-rose-600"
              }
            >
              {order.type}
            </span>

            <span className="text-right text-stone-700">{order.quantity}</span>

            <span className="text-right text-stone-700">
              ₹
              {order.price.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>

            <span
              className={`text-right font-medium ${statusColor[order.status]}`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersTable;
