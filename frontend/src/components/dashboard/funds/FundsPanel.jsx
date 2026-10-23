import React, { useState } from "react";
import { formatINR } from "../../../utils/formatters";

const quickAmounts = [5000, 10000, 25000];

const FundsPanel = ({ available }) => {
  const [mode, setMode] = useState("Add");
  const [amount, setAmount] = useState("");

  const value = Number(amount);
  const tooMuch = mode === "Withdraw" && value > available;
  const canSubmit = value > 0 && !tooMuch;

  return (
    <section className="rounded-md border border-stone-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-stone-900">Manage funds</h2>

      {/* Add / Withdraw */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setMode("Add")}
          className={
            mode === "Add"
              ? "rounded-md bg-stone-800 py-2 text-sm font-medium text-white"
              : "rounded-md border border-stone-300 py-2 text-sm text-stone-600"
          }
        >
          Add funds
        </button>

        <button
          type="button"
          onClick={() => setMode("Withdraw")}
          className={
            mode === "Withdraw"
              ? "rounded-md bg-stone-800 py-2 text-sm font-medium text-white"
              : "rounded-md border border-stone-300 py-2 text-sm text-stone-600"
          }
        >
          Withdraw
        </button>
      </div>

      {/* Amount */}
      <label className="mt-4 block text-sm text-stone-600">Amount (₹)</label>
      <input
        type="number"
        min="0"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mt-1 h-10 w-full rounded-md border border-stone-300 px-3 text-sm outline-none focus:border-stone-500"
      />

      {/* Quick amounts (only when adding) */}
      {mode === "Add" && (
        <div className="mt-3 flex gap-2">
          {quickAmounts.map((quick) => (
            <button
              key={quick}
              type="button"
              onClick={() => setAmount(String(quick))}
              className="rounded-md border border-stone-300 px-3 py-1.5 text-xs text-stone-600 hover:border-stone-400"
            >
              ₹{quick.toLocaleString("en-IN")}
            </button>
          ))}
        </div>
      )}

      {/* Withdraw limit */}
      {mode === "Withdraw" && (
        <p
          className={`mt-2 text-xs ${
            tooMuch ? "text-rose-600" : "text-stone-500"
          }`}
        >
          You can withdraw up to {formatINR(available)}
        </p>
      )}

      <button
        type="button"
        disabled={!canSubmit}
        className="mt-5 h-10 w-full rounded-md bg-stone-900 text-sm font-medium text-white hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {mode === "Add" ? "Add funds" : "Withdraw"}
      </button>
    </section>
  );
};

export default FundsPanel;
