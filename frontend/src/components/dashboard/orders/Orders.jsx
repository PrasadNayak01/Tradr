import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import OrdersHeader from "./OrdersHeader";
import OrdersSummary from "./OrdersSummary";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders").then((res) => {
      setOrders(res.data);
    });
  });

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar activeItem="Orders" />

      <div className="ml-62 flex min-h-screen flex-col pt-20">
        <Navbar />

        <main className="flex-1">
          <OrdersHeader />
          <OrdersSummary orders={orders} />

          <div className="px-7 pb-8">
            <OrdersTable orders={orders} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Orders;
