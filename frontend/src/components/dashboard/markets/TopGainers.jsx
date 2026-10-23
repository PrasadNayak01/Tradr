import React, { useState, useEffect } from "react";
import MoversTable from "./MoversTable";
import axios from "axios";

const TopGainers = ({ symbols, setSymbols }) => {
  const [gainers, setGainers] = useState([]);

  console.log(symbols);

  useEffect(() => {
    axios.get("http://localhost:3000/api/markets/gainers").then((res) => {
      setGainers(res.data);
    });
  }, []);
  return (
    <div>
      <MoversTable
        title="Top gainers"
        stocks={gainers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
    </div>
  );
};

export default TopGainers;
