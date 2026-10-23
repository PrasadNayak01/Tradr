import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Tradr Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartLine,
  faStar,
  faFileLines,
  faChartPie,
  faLayerGroup,
  faWallet,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ activeItem }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: faHouse,
      path: "/dashboard",
    },
    {
      name: "Markets",
      icon: faChartLine,
      path: "/markets",
    },
    {
      name: "Watchlist",
      icon: faStar,
      path: "/watchlist",
    },
    {
      name: "Orders",
      icon: faFileLines,
      path: "/orders",
    },
    {
      name: "Holdings",
      icon: faChartPie,
      path: "/holdings",
    },
    {
      name: "Positions",
      icon: faLayerGroup,
      path: "/positions",
    },
    {
      name: "Funds",
      icon: faWallet,
      path: "/funds",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-62 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-20 items-center border-b border-gray-200 px-6">
        <img src={Logo} alt="Tradr" className="w-11 h-11 object-contain" />

        <div className="ml-3">
          <h1 className="text-[30px] font-semibold leading-none text-gray-900">
            Tradr
          </h1>

          <p className="mt-1 text-[9px] leading-none text-gray-500">
            Trade Smarter. Grow Together.
          </p>
        </div>
      </div>

      <nav className="flex-1 px-4 pt-6">
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = activeItem === item.name;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex h-11.5 items-center gap-4 rounded-md px-4 text-[16px] transition-colors ${
                  isActive
                    ? "border-l-2 border-indigo-600 bg-indigo-50 text-indigo-600 font-medium"
                    : "border-l-2 border-transparent text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-4.5 text-[18px]"
                />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-gray-200 p-4.5">
        <div className="relative rounded-xl bg-indigo-50 px-5 py-6">
          <div className="absolute right-5 top-7 flex items-end gap-1">
            <div className="h-5 w-2 rounded-sm bg-indigo-300"></div>
            <div className="h-8 w-2 rounded-sm bg-indigo-400"></div>
            <div className="h-11 w-2 rounded-sm bg-indigo-600"></div>
          </div>

          <h2 className="text-[19px] font-semibold leading-6 text-indigo-900">
            Stay ahead
            <br />
            with Tradr
          </h2>

          <p className="mt-4 text-[14px] leading-5 text-gray-600">
            Real-time markets.
            <br />
            Smarter decisions.
          </p>

          <Link
            to="/markets"
            className="mt-5 flex h-10.5 items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 text-[14px] font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Explore Markets
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
