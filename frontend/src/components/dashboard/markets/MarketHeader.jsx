import React, { useEffect, useState } from "react";

// NSE trades Mon-Fri, 9:15 AM to 3:30 PM IST (holidays not handled)
const isMarketOpen = () => {
  const ist = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
  );
  const day = ist.getDay();
  const minutes = ist.getHours() * 60 + ist.getMinutes();

  return day >= 1 && day <= 5 && minutes >= 555 && minutes < 930;
};

const MarketHeader = () => {
  const [open, setOpen] = useState(isMarketOpen);

  useEffect(() => {
    const timer = setInterval(() => setOpen(isMarketOpen()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex items-end justify-between px-7 pt-7 pb-5">
      <h1 className="text-2xl font-semibold text-stone-900">Markets</h1>

      <div className="flex items-center gap-2 text-sm text-stone-500">
        <span
          className={`h-2 w-2 rounded-full ${
            open ? "bg-emerald-600" : "bg-stone-400"
          }`}
        ></span>
        NSE {open ? "open" : "closed"}
      </div>
    </section>
  );
};

export default MarketHeader;
