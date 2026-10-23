import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import HoldingsHeader from "./HoldingsHeader";
import HoldingsSummary from "./HoldingsSummary";
import HoldingsTable from "./HoldingsTable";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/holdings")
      .then((res) => setHoldings(res.data));
  });
  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar activeItem="Holdings" />

      <div className="ml-62 flex min-h-screen flex-col pt-20">
        <Navbar />

        <main className="flex-1">
          <HoldingsHeader />
          <HoldingsSummary holdings={holdings} />

          <div className="px-7 pb-8">
            <HoldingsTable holdings={holdings} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Holdings;
