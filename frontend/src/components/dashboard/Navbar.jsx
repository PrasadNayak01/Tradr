import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faUser,
  faRightFromBracket,
  faChevronDown,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { formatINR, formatPercent, changeColor } from "../../utils/formatters";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/markets/indices")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("Market indices error:", err);
      });
  }, []);

  return (
    <header className="fixed left-62 right-0 top-0 z-40 h-20 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center px-7">
        <div className="flex h-11 w-108.75 items-center rounded-lg bg-gray-50 px-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search for stocks, ETFs, indices..."
            className="ml-3 w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="ml-8 flex h-full items-center">
          <div className="flex items-center gap-5 border-r border-gray-200 pr-6">
            <div>
              <p className="text-xs text-gray-600">
                {data.nifty50?.name || "NIFTY 50"}
              </p>

              <div className="mt-1 flex items-center gap-3">
                <p className="text-sm font-semibold text-gray-900">
                  {formatINR(data.nifty50?.price)}
                </p>

                <p
                  className={`text-sm font-medium ${changeColor(
                    data.nifty50?.change,
                  )}`}
                >
                  {formatINR(data.nifty50?.change)} (
                  {formatPercent(data.nifty50?.percentChange)})
                </p>
              </div>
            </div>
          </div>

          <div className="ml-6 flex items-center gap-5">
            <div>
              <p className="text-xs text-gray-600">
                {data.sensex?.name || "SENSEX"}
              </p>

              <div className="mt-1 flex items-center gap-3">
                <p className="text-sm font-semibold text-gray-900">
                  {formatINR(data.sensex?.price)}
                </p>

                <p
                  className={`text-sm font-medium ${changeColor(
                    data.sensex?.change,
                  )}`}
                >
                  {formatINR(data.sensex?.change)} (
                  {formatPercent(data.sensex?.percentChange)})
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center">
          <button className="relative flex h-10 w-10 items-center justify-center text-gray-700 hover:text-indigo-600">
            <FontAwesomeIcon icon={faBell} className="text-xl" />

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <div className="relative ml-5">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white">
                PN
              </div>

              <span className="text-sm font-medium text-gray-800">
                Prasad Nayak
              </span>

              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-xs text-gray-600 transition-transform ${
                  showProfile ? "rotate-180" : ""
                }`}
              />
            </button>

            {showProfile && (
              <div className="absolute right-0 top-14 w-56 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                <div className="flex items-center gap-3 border-b border-gray-200 px-5 py-4">
                  <FontAwesomeIcon icon={faUser} className="text-gray-600" />

                  <span className="text-sm text-gray-700">
                    Hello, Prasad Nayak
                  </span>
                </div>

                <button className="flex w-full items-center gap-3 px-5 py-4 text-sm text-gray-700 hover:bg-gray-50">
                  <FontAwesomeIcon icon={faUser} />
                  Profile
                </button>

                <button className="flex w-full items-center gap-3 px-5 py-4 text-sm text-gray-700 hover:bg-gray-50">
                  <FontAwesomeIcon icon={faGear} />
                  Settings
                </button>

                <button className="flex w-full items-center gap-3 border-t border-gray-100 px-5 py-4 text-sm text-gray-700 hover:bg-gray-50">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
