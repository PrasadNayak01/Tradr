import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUser,
  faChartColumn,
  faWallet,
  faChartPie,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const CreateTicket = () => {
  const topics = [
    {
      title: "Account Opening",
      icon: faUserPlus,
      links: [
        "Create a Tradr Account",
        "Account Opening Process",
        "Account Verification",
        "KYC & Documents",
        "Getting Started",
      ],
    },
    {
      title: "Your Tradr Account",
      icon: faUser,
      links: [
        "Login Credentials",
        "Forgot Password",
        "Update Profile",
        "Change Account Details",
        "Account Security",
      ],
    },
    {
      title: "Trading",
      icon: faChartColumn,
      links: [
        "Trading Basics",
        "Order Types",
        "Placing an Order",
        "Understanding Positions",
        "Trading FAQs",
        "Market Hours",
      ],
    },
    {
      title: "Funds",
      icon: faWallet,
      links: [
        "Add Funds",
        "Withdraw Funds",
        "Payment Methods",
        "Transaction History",
        "Refunds",
      ],
    },
    {
      title: "Portfolio",
      icon: faChartPie,
      links: [
        "View Portfolio",
        "Track Holdings",
        "Portfolio Performance",
        "Reports",
        "Investment History",
      ],
    },
    {
      title: "Tradr Learn",
      icon: faGraduationCap,
      links: [
        "Stock Market Basics",
        "Understanding Mutual Funds",
        "Technical Analysis",
        "Investment Guides",
        "Learning Resources",
      ],
    },
  ];

  return (
    <section className="px-6 lg:px-24 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
          To create a ticket, select a relevant topic
        </h2>

        {/* Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14 mt-12">
          {topics.map((topic, index) => (
            <div key={index}>
              {/* Topic title */}
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={topic.icon}
                  className="text-gray-700 text-base"
                />

                <h3 className="text-lg font-medium text-gray-900">
                  {topic.title}
                </h3>
              </div>

              {/* Topic links */}
              <div className="flex flex-col gap-4 mt-7">
                {topic.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    to="/support"
                    className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Create Ticket */}
        <div className="mt-16 border-t border-gray-200 pt-10 text-center">
          <h3 className="text-xl font-medium text-gray-900">
            Can't find what you're looking for?
          </h3>

          <p className="mt-2 text-gray-500">
            Create a support ticket and our team will help you.
          </p>

          <Link
            to="/support/tickets/create"
            className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Create a Ticket
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CreateTicket;
