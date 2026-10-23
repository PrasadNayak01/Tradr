import React, { useEffect, useState } from "react";

const getGreeting = (hour) => {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

const Hero = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const date = now.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <section className="flex items-end justify-between px-7 pt-7 pb-5">
      <div>
        <h1 className="text-2xl font-semibold text-stone-900">
          {getGreeting(now.getHours())}, Prasad
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Your portfolio at a glance
        </p>
      </div>

      <p className="text-sm tabular-nums text-stone-500">
        {date} · {time}
      </p>
    </section>
  );
};

export default Hero;
