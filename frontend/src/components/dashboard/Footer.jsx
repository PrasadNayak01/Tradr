import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-7 py-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="text-sm font-medium text-gray-700">© 2026 Tradr</p>

          <p className="mt-1 text-xs text-gray-500">
            Trade Smarter. Grow Together.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-500">
          <Link
            to="/support"
            className="hover:text-indigo-600 transition-colors"
          >
            Help & Support
          </Link>

          <Link
            to="/pricing"
            className="hover:text-indigo-600 transition-colors"
          >
            Pricing
          </Link>

          <Link to="/about" className="hover:text-indigo-600 transition-colors">
            About Tradr
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
