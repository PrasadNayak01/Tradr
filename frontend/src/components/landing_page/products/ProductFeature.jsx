import React from "react";

const ProductFeature = ({ image, title, description, reverse = false }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-evenly gap-12 lg:px-16 py-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full lg:w-1/2 flex justify-center">
        <img src={image} alt={title} className="w-full max-w-xl h-auto" />
      </div>

      <div className="w-full lg:w-1/2 max-w-xl">
        <h2 className="text-3xl font-medium">{title}</h2>

        <p className="mt-5 text-base text-gray-600 leading-7">{description}</p>

        <a
          href="#"
          className="inline-block mt-6 text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default ProductFeature;
