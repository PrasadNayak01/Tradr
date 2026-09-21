import React from "react";
import largestBroker from "../../../assets/svg/largestBroker.svg";
import pressLogos from "../../../assets/images/pressLogos.png";

const Awards = () => {
  return (
    <div className="flex justify-evenly">
      <div className="my-20">
        <img src={largestBroker} alt="Awards" className="w-125 h-auto" />
      </div>
      <div className="flex flex-col justify-center ml-32">
        <h2 className="text-3xl font-medium text-center">
          Built for Every Kind of Investor
        </h2>
        <p className="text-justify w-lg mt-4 text-base">
          Tradr brings powerful tools together to help you explore markets,
          track opportunities, and make informed investment decisions.
        </p>
        <div className="grid grid-cols-2 gap-x-12 mt-8 ml-4">
          <ul className="list-disc pl-5 space-y-3">
            <li>Stocks & ETFs</li>
            <li>Options & Futures</li>
            <li>Mutual Funds</li>
          </ul>

          <ul className="list-disc pl-5 space-y-3">
            <li>Bonds</li>
            <li>Market Insights</li>
            <li>Portfolio Tracking</li>
          </ul>
        </div>
        <img src={pressLogos} alt="Media Logos" className="w-136 mt-5" />
      </div>
    </div>
  );
};

export default Awards;
