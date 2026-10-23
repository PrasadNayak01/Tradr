import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import StockHeader from "./StockHeader";
import StockOverview from "./StockOverview";
import StockChart from "./StockChart";
import OrderPanel from "./OrderPanel";
import axios from "axios";

const Stock = () => {
  const { symbol } = useParams();
  const [stock, setStock] = useState({});
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/stock/${symbol}`).then((res) => {
      setStock(res.data);
      console.log(res.data);
    });
  }, [symbol]);

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar activeItem="Markets" />

      <div className="ml-62 flex min-h-screen flex-col pt-20">
        <Navbar />

        <main className="flex-1">
          <StockHeader stock={stock} symbol={symbols} setSymbols={setSymbols} />
          <StockOverview stock={stock} />

          <div className="px-7 pb-8">
            <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[2fr_1fr]">
              <StockChart />
              <OrderPanel stock={stock} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Stock;
