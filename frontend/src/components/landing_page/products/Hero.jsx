import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-medium">Technology</h1>

      <p className="mt-6 text-lg md:text-xl text-gray-600">
        Smart, modern and intuitive technology for better investing
      </p>

      <Link
        to="/products"
        className="mt-6 text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        Explore our investment tools →
      </Link>
    </section>
  );
};

export default Hero;
