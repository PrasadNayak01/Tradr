import React, { useState, useEffect } from "react";
import MoversTable from "./MoversTable";
import axios from "axios";

const TopLosers = ({ symbols, setSymbols }) => {
  const [loosers, setLoosers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/markets/loosers").then((res) => {
      setLoosers(res.data);
    });
  }, []);
  return (
    <div>
      <MoversTable
        title="Top losers"
        stocks={loosers}
        symbols={symbols}
        setSymbols={setSymbols}
      />
    </div>
  );
};

export default TopLosers;
