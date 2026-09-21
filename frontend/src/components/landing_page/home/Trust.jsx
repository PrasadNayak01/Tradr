import React from "react";
import ecosystem from "../../../assets/images/ecosystem.png";
import { Link } from "react-router-dom";

const Trust = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-12 lg:px-16 py-16">
      <div className="flex flex-col justify-center max-w-xl">
        <h2 className="text-3xl font-medium">
          Everything you need, all in Tradr
        </h2>

        <div className="mt-6">
          <h4 className="text-lg font-medium">Trade with confidence</h4>
          <p className="mt-2 text-sm text-gray-600">
            Powerful tools designed to help you discover, track, and manage your
            investments from one place.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-lg font-medium">Stay ahead of the market</h4>
          <p className="mt-2 text-sm text-gray-600">
            Get market insights, portfolio updates, and useful information to
            help you understand your investments.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-lg font-medium">One ecosystem, multiple tools</h4>
          <p className="mt-2 text-sm text-gray-600">
            From trading and portfolio management to market insights and
            security, Tradr brings everything together in one connected
            platform.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-lg font-medium">Built around you</h4>
          <p className="mt-2 text-sm text-gray-600">
            Simple, intuitive tools that make managing your investments easier
            at every step.
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-col">
        <img
          src={ecosystem}
          alt="Tradr ecosystem"
          className="w-full max-w-xl"
        />
        <span className="flex gap-25 text-indigo-600 -mt-4 justify-center">
          <Link
            to="/products"
            className="hover:text-indigo-800 transition-colors"
          >
            Explore our products &rarr;
          </Link>

          <Link
            to="/signup"
            className="hover:text-indigo-800 transition-colors"
          >
            Try Tradr &rarr;
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Trust;
