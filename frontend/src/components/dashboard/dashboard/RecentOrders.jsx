import React from "react";
import { Link } from "react-router-dom";
import { formatINR } from "../../../utils/formatters";

const columns = "grid-cols-[1.6fr_0.7fr_1fr_1fr]";

const statusColor = (status) => {
  if (status === "Executed") {
    return "bg-emerald-50 text-emerald-700";
  }

  if (status === "Cancelled") {
    return "bg-rose-50 text-rose-600";
  }

  return "bg-amber-50 text-amber-700";
};

const RecentOrders = ({ orders, limit }) => {
  const displayedOrders = orders.slice(0, limit);
  return (
    <section className="w-full min-w-0 rounded-md border border-stone-200 bg-white">
      {/* Header */}
      <div className="flex items-baseline justify-between px-5 pb-3 pt-5">
        <div className="flex items-baseline gap-3">
          <h2 className="text-lg font-semibold text-stone-900">
            Recent orders
          </h2>

          <span className="text-sm text-stone-500">{orders.length} orders</span>
        </div>

        <Link
          to="/dashboard/orders"
          className="whitespace-nowrap text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900"
        >
          View all
        </Link>
      </div>

      <div className="px-5 pb-3">
        {/* Table header */}
        <div
          className={`grid ${columns} items-center border-b border-stone-200 py-2 text-xs font-medium text-stone-500`}
        >
          <span>Stock</span>
          <span className="text-right">Qty</span>
          <span className="text-right">Price</span>
          <span className="text-right">Status</span>
        </div>

        {/* Rows */}
        {displayedOrders.map((order) => (
          <div
            key={`${order.name}-${order.price}`}
            className={`grid ${columns} items-center border-b border-stone-100 py-3 text-sm tabular-nums last:border-b-0`}
          >
            {/* Stock */}
            <div className="min-w-0">
              <p className="font-medium text-stone-900">{order.name}</p>
            </div>

            {/* Quantity */}
            <span className="text-right text-stone-700">{order.quantity}</span>

            {/* Price */}
            <span className="whitespace-nowrap text-right text-stone-700">
              {formatINR(order.price)}
            </span>

            {/* Status */}
            <div className="flex justify-end">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(
                  order.status,
                )}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentOrders;
