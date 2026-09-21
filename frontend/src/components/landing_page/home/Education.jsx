import React from "react";
import { Link } from "react-router-dom";
import varsity from "../../../assets/images/varsity.png";

const Education = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly gap-12 px-6 lg:px-16 py-16">
      <div className="flex justify-center">
        <img
          src={varsity}
          alt="Tradr market education"
          className="w-full max-w-lg h-auto"
        />
      </div>

      <div className="flex flex-col justify-center max-w-xl">
        <h2 className="text-3xl font-medium">Learn. Analyze. Trade Smarter.</h2>

        <div className="mt-8">
          <h3 className="text-lg font-medium">Build your market knowledge</h3>

          <p className="mt-2 text-sm text-gray-600">
            Explore essential concepts, understand market movements, and develop
            the confidence to make informed investment decisions.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-3 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            Explore Tradr →
          </Link>
        </div>

        <div className="mt-7">
          <h3 className="text-lg font-medium">Analyze before you invest</h3>

          <p className="mt-2 text-sm text-gray-600">
            Use charts, market data, and portfolio insights to understand
            opportunities and track your investments.
          </p>

          <Link
            to="/signup"
            className="inline-block mt-3 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
          >
            Start Learning →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
