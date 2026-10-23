import React from "react";

const StockChart = () => {
  // x = position across, y = height (smaller y means higher price)
  const chartPoints = [
    { x: 0, y: 150 },
    { x: 50, y: 140 },
    { x: 100, y: 145 },
    { x: 150, y: 120 },
    { x: 200, y: 130 },
    { x: 250, y: 105 },
    { x: 300, y: 115 },
    { x: 350, y: 90 },
    { x: 400, y: 100 },
    { x: 450, y: 75 },
    { x: 500, y: 85 },
    { x: 550, y: 55 },
    { x: 600, y: 65 },
  ];

  const points = chartPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <section className="rounded-md border border-stone-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-stone-900">Price chart</h2>
      <p className="mt-1 text-sm text-stone-500">Today</p>

      <div className="mt-5 h-64 w-full">
        <svg
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <line x1="0" y1="50" x2="600" y2="50" stroke="#e7e5e4" />
          <line x1="0" y1="100" x2="600" y2="100" stroke="#e7e5e4" />
          <line x1="0" y1="150" x2="600" y2="150" stroke="#e7e5e4" />

          <polyline
            points={points}
            fill="none"
            stroke="#047857"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="mt-3 flex justify-between text-xs text-stone-500">
        <span>9:15 AM</span>
        <span>3:30 PM</span>
      </div>
    </section>
  );
};

export default StockChart;
