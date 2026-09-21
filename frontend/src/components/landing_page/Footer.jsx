import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 px-8 lg:px-24 pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600">Tradr</h2>

          <p className="mt-4 text-sm text-gray-500 leading-6">
            A modern platform for exploring markets, tracking investments, and
            managing your portfolio.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            © 2026 Tradr. All rights reserved.
          </p>

          <div className="flex gap-5 mt-6 text-gray-500">
            <Link
              to="https://github.com/"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-indigo-600 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>

            <Link
              to="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-indigo-600 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            <Link
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-indigo-600 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>

            <Link
              to="http://x.com/"
              target="_blank"
              aria-label="X"
              className="hover:text-indigo-600 transition-colors"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium">Company</h3>

          <div className="flex flex-col gap-4 mt-5 text-sm text-gray-500">
            <Link to="/about" className="hover:text-indigo-600">
              About
            </Link>
            <Link to="/products" className="hover:text-indigo-600">
              Products
            </Link>
            <Link to="/pricing" className="hover:text-indigo-600">
              Pricing
            </Link>
            <Link to="/support" className="hover:text-indigo-600">
              Support
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium">Resources</h3>

          <div className="flex flex-col gap-4 mt-5 text-sm text-gray-500">
            <Link to="#" className="hover:text-indigo-600">
              Market Insights
            </Link>
            <Link to="#" className="hover:text-indigo-600">
              Help Center
            </Link>
            <Link to="#" className="hover:text-indigo-600">
              Documentation
            </Link>
            <Link to="#" className="hover:text-indigo-600">
              Contact Us
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium">Account</h3>

          <div className="flex flex-col gap-4 mt-5 text-sm text-gray-500">
            <Link to="#" className="hover:text-indigo-600">
              Open an Account
            </Link>
            <Link to="#" className="hover:text-indigo-600">
              Login
            </Link>
            <Link to="#" className="hover:text-indigo-600">
              Portfolio
            </Link>
            <Link to="#" className="hover:text-indigo-600">
              Settings
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12 pt-6">
        <p className="text-xs text-gray-500 leading-5 max-w-6xl">
          Tradr is a portfolio project created for educational and demonstration
          purposes. The information displayed on this website is for
          informational purposes only and should not be considered financial
          advice or a recommendation to buy or sell any security.
        </p>

        <div className="flex flex-wrap gap-6 mt-6 text-xs text-gray-500">
          <a href="#" className="hover:text-indigo-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-600">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-indigo-600">
            Risk Disclosure
          </a>
          <a href="#" className="hover:text-indigo-600">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
