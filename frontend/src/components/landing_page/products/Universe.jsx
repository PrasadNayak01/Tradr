import React from "react";
import { Link } from "react-router-dom";
import Core from "../../../assets/images/core.png";
import Insights from "../../../assets/images/insights.png";
import Learn from "../../../assets/images/learn.png";
import Pulse from "../../../assets/images/pulse.png";
import Api from "../../../assets/images/api.png";
import Secure from "../../../assets/images/secure.png";

const Universe = () => {
  const products = [
    {
      name: "Tradr Core",
      image: Core,
      description: "Complete trading and portfolio platform",
    },
    {
      name: "Tradr Insights",
      image: Insights,
      description: "Market insights and investment analysis",
    },
    {
      name: "Tradr Learn",
      image: Learn,
      description: "Learn investing through simple lessons",
    },
    {
      name: "Tradr Pulse",
      image: Pulse,
      description: "Track markets and important updates",
    },
    {
      name: "Tradr API",
      image: Api,
      description: "APIs for building trading experiences",
    },
    {
      name: "Tradr Secure",
      image: Secure,
      description: "Security tools for your investments",
    },
  ];

  return (
    <section className="px-6 lg:px-24 py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-medium">The Tradr Ecosystem</h2>

      <p className="mt-4 text-gray-600">
        Explore the tools and services that make investing simpler and more
        connected.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col items-center">
            <h3 className="text-xl font-medium text-gray-800">
              <img src={product.image} alt={product.name} />
            </h3>

            <p className="mt-3 text-sm text-gray-500 max-w-xs">
              {product.description}
            </p>
          </div>
        ))}
      </div>

      <Link
        to="/signup"
        className="inline-block mt-14 px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Get Started
      </Link>
    </section>
  );
};

export default Universe;
