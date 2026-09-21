import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-indigo-600">404</h1>

      <h2 className="mt-4 text-3xl font-semibold">Page not found</h2>

      <p className="mt-3 text-gray-600 max-w-md">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-7 px-6 py-3 bg-indigo-600 text-white rounded-md
                   hover:bg-indigo-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
