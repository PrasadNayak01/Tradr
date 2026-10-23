import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const OrderPanel = ({ stock }) => {
  const [side, setSide] = useState("Buy");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Holdings");

  const addOrder = async ({ name, price }) => {
    try {
      await axios.post("http://localhost:3000/api/orders/new", {
        name,
        type: side,
        category,
        quantity,
        price,
        status: Math.floor(Math.random() * 10) < 8 ? "Executed" : "Cancelled",
      });
      toast.success("Order Placed");
    } catch {
      toast.error("Something went wrong. Try again");
    }
  };

  if (!stock) {
    return (
      <section className="rounded-md border border-stone-200 bg-white p-5">
        <p className="text-sm text-stone-500">Loading order panel...</p>
      </section>
    );
  }

  const price = Number(stock.price);
  const total = quantity * price;

  return (
    <section className="rounded-md border border-stone-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-stone-900">Place order</h2>

      {/* Buy / Sell */}
      <ToastContainer />
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setSide("Buy")}
          className={
            side === "Buy"
              ? "rounded-md bg-emerald-700 py-2 text-sm font-medium text-white"
              : "rounded-md border border-stone-300 py-2 text-sm text-stone-600"
          }
        >
          Buy
        </button>

        <button
          type="button"
          onClick={() => setSide("Sell")}
          className={
            side === "Sell"
              ? "rounded-md bg-rose-600 py-2 text-sm font-medium text-white"
              : "rounded-md border border-stone-300 py-2 text-sm text-stone-600"
          }
        >
          Sell
        </button>
      </div>

      {/* Quantity */}
      <label className="mt-4 block text-sm text-stone-600">Quantity</label>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="mt-1 h-10 w-full rounded-md border border-stone-300 px-3 text-sm outline-none focus:border-stone-500"
      />

      {/* Price */}
      <label className="mt-4 block text-sm text-stone-600">Price</label>

      <input
        type="number"
        value={price}
        disabled
        className="mt-1 h-10 w-full cursor-not-allowed rounded-md border border-stone-300 bg-stone-100 px-3 text-sm text-stone-500 outline-none"
      />

      <label className="mt-4 block text-sm text-stone-600">Type</label>

      <select
        className="mt-1 h-10 w-full rounded-md border border-stone-300 bg-white px-3 text-sm text-stone-700 outline-none focus:border-stone-500"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Holdings">Holdings</option>
        <option value="Positions">Positions</option>
      </select>

      {/* Total */}
      <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4 text-sm">
        <span className="text-stone-500">Estimated value</span>

        <span className="font-medium text-stone-900">
          ₹
          {total.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </span>
      </div>

      {/* Order Button */}
      <button
        type="button"
        className={`mt-5 h-10 w-full rounded-md text-sm font-medium text-white ${
          side === "Buy"
            ? "bg-emerald-700 hover:bg-emerald-800"
            : "bg-rose-600 hover:bg-rose-700"
        }`}
        onClick={(e) => {
          e.preventDefault();
          addOrder({
            name: stock.symbol,
            price,
          });
        }}
      >
        {side} {stock.symbol}
      </button>
    </section>
  );
};

export default OrderPanel;
