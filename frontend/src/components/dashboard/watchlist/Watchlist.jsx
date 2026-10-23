import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import WatchlistHeader from "./WatchlistHeader";
import WatchlistTable from "./WatchlistTable";
import axios from "axios";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/watchlist");

        setWatchlist(response.data);

        const symbols = response.data.map((stock) => stock.symbol);

        const responses = await Promise.all(
          symbols.map((symbol) =>
            axios.get(`http://localhost:3000/api/stock/${symbol}`),
          ),
        );

        const stockData = responses.map((response) => response.data);

        setStocks(stockData);
      } catch (err) {
        console.log("Watchlist error:", err.response?.data || err.message);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeItem="Watchlist" />

      <div className="ml-62 pt-20">
        <Navbar />

        <main>
          <WatchlistHeader />

          <div className="p-5 lg:px-7">
            <WatchlistTable
              watchlist={watchlist}
              stocks={stocks}
              setStocks={setStocks}
            />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Watchlist;
