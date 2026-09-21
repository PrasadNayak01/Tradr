import React from "react";
import homeHero from "../../../assets/images/homeHero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-center mx-52">
      <img
        src={homeHero}
        alt="Hero Image"
        className="w-full max-w-3xl md:max-w-3xl lg:max-w-4xl h-auto mx-auto"
      />
      <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase mt-16">
        Built for modern investors
      </p>
      <h1 className="text-5xl font-semibold">Trade smarter. Invest better.</h1>
      <p className="opacity-75 mt-2.5">
        Your modern platform to track markets, analyze stocks, and manage your
        investments.
      </p>
      <button className="border-2 px-8 py-2 rounded-lg text-white bg-indigo-600 mt-6 w-44 text-center">
        <Link to="/signup">Get Started</Link>
      </button>
    </div>
  );
};

export default Hero;
