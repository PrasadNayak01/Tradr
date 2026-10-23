import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import FundsHeader from "./FundsHeader";
import FundsSummary from "./FundsSummary";
import FundsTransactions from "./FundsTransactions";
import FundsPanel from "./FundsPanel";

const Funds = () => {
  const funds = {
    available: 74230,
    usedMargin: 41627.5,
  };

  // Positive amount = money in, negative = money out
  const transactions = [
    {
      id: 1,
      date: "24 Sep 2026",
      description: "Bought SBIN",
      type: "Trade",
      amount: -20297.5,
    },
    {
      id: 2,
      date: "24 Sep 2026",
      description: "Bought BAJFINANCE",
      type: "Trade",
      amount: -14340,
    },
    {
      id: 3,
      date: "24 Sep 2026",
      description: "Bought ASIANPAINT",
      type: "Trade",
      amount: -6990,
    },
    {
      id: 4,
      date: "22 Sep 2026",
      description: "Added via UPI",
      type: "Deposit",
      amount: 25000,
    },
    {
      id: 5,
      date: "18 Sep 2026",
      description: "Withdrawn to bank account",
      type: "Withdrawal",
      amount: -10000,
    },
    {
      id: 6,
      date: "12 Sep 2026",
      description: "Added via UPI",
      type: "Deposit",
      amount: 50000,
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar activeItem="Funds" />

      <div className="ml-62 flex min-h-screen flex-col pt-20">
        <Navbar />

        <main className="flex-1">
          <FundsHeader />
          <FundsSummary funds={funds} />

          <div className="px-7 pb-8">
            <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[2fr_1fr]">
              <FundsTransactions transactions={transactions} />
              <FundsPanel available={funds.available} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Funds;
