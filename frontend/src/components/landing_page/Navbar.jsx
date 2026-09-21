import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/Tradr Logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 lg:px-24 py-5 bg-white border-b border-gray-200">
      <Link to="/">
        <img src={logo} alt="Tradr" className="w-30 h-auto object-contain" />
      </Link>

      <div className="hidden md:flex items-center gap-10 text-sm">
        <Link to="/" className="hover:text-indigo-600 transition-colors">
          Home
        </Link>

        <Link to="/about" className="hover:text-indigo-600 transition-colors">
          About
        </Link>

        <Link
          to="/products"
          className="hover:text-indigo-600 transition-colors"
        >
          Products
        </Link>

        <Link to="/pricing" className="hover:text-indigo-600 transition-colors">
          Pricing
        </Link>

        <Link to="/support" className="hover:text-indigo-600 transition-colors">
          Support
        </Link>

        {/* <Link to="/login" className="hover:text-indigo-600 transition-colors">
          Login
        </Link> */}

        <Link
          to="/signup"
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Sign Up
        </Link>
      </div>

      <button className="md:hidden text-xl">☰</button>
    </nav>
  );
};

export default Navbar;
