import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import PositionsHeader from "./PositionsHeader";
import PositionsSummary from "./PositionsSummary";
import PositionsTable from "./PositionsTable";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/positions").then((res) => {
      setPositions(res.data);
    });
  });
  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar activeItem="Positions" />

      <div className="ml-62 flex min-h-screen flex-col pt-20">
        <Navbar />

        <main className="flex-1">
          <PositionsHeader />
          <PositionsSummary positions={positions} />

          <div className="px-7 pb-8">
            <PositionsTable positions={positions} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Positions;
