import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import MarketHeader from "./MarketHeader";
import MarketOverview from "./MarketOverview";
import TopGainers from "./TopGainers";
import TopLosers from "./TopLosers";
import PopularStocks from "./PopularStocks";
import axios from "axios";

const Markets = () => {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/watchlist");

        const symbols = response.data.map((stock) => stock.symbol);

        setSymbols(symbols);
        console.log(symbols);
      } catch (err) {
        console.log("Watchlist error:", err.response?.data || err.message);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar activeItem="Markets" />

      <div className="ml-62 flex min-h-screen flex-col pt-20">
        <Navbar />

        <main className="flex-1">
          <MarketHeader />
          <MarketOverview />

          <div className="px-7 pb-8">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <TopGainers symbols={symbols} setSymbols={setSymbols} />
              <TopLosers symbols={symbols} setSymbols={setSymbols} />
            </div>

            <div className="mt-4">
              <PopularStocks symbols={symbols} setSymbols={setSymbols} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Markets;
