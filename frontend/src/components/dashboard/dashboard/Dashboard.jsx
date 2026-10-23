import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Hero from "./Hero";
import Summary from "./Summary";
import Holdings from "./Holdings";
import RecentOrders from "./RecentOrders";
import axios from "axios";

const Dashboard = () => {
  const [holdings, setHoldings] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/holdings")
      .then((res) => setHoldings(res.data));
  });

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders").then((res) => {
      setOrders(res.data);
    });
  });

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar activeItem="Dashboard" />

      <div className="ml-62 flex min-h-screen flex-col pt-20">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <Summary />

          <div className="px-7 pb-8">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr]">
              <Holdings holdings={holdings} limit={5} />
              <RecentOrders orders={orders} limit={5} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
