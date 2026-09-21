import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 md:py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-medium">Tradr Support</h2>

          <Link
            to="/support/tickets"
            className="text-sm md:text-base underline hover:text-indigo-100 transition-colors"
          >
            Track Tickets
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">
          <div>
            <h1 className="text-2xl md:text-3xl font-medium leading-relaxed max-w-xl">
              Search for an answer or browse help topics
              <br className="hidden md:block" />
              to get the help you need
            </h1>

            <input
              type="text"
              placeholder="Eg: how do I create an account, how do I track my portfolio..."
              className="mt-6 w-full max-w-xl px-5 py-4 rounded-md text-gray-700 bg-white outline-none placeholder:text-gray-400"
            />

            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5 text-sm">
              <Link to="/signup" className="underline hover:text-indigo-100">
                Account opening
              </Link>

              <Link to="/support" className="underline hover:text-indigo-100">
                Account & login
              </Link>

              <Link to="/products" className="underline hover:text-indigo-100">
                Trading
              </Link>

              <Link to="/pricing" className="underline hover:text-indigo-100">
                Pricing & charges
              </Link>

              <Link to="/support" className="underline hover:text-indigo-100">
                User guide
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-medium">Featured</h2>

            <ol className="mt-4 space-y-4 text-sm md:text-base">
              <li>
                <Link to="/support" className="underline hover:text-indigo-100">
                  1. Getting started with Tradr
                </Link>
              </li>

              <li>
                <Link to="/support" className="underline hover:text-indigo-100">
                  2. Understanding your Tradr dashboard
                </Link>
              </li>

              <li>
                <Link to="/support" className="underline hover:text-indigo-100">
                  3. Managing your portfolio
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
