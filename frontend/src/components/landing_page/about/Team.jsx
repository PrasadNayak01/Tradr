import React from "react";
import { Link } from "react-router-dom";
import profile from "../../../assets/images/profile.png";

const Team = () => {
  return (
    <section className="px-6 lg:px-24 py-16">
      <h2 className="text-3xl md:text-4xl font-medium text-center">
        Meet the Founder
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 mt-16 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            src={profile}
            alt="Founder"
            className="w-64 h-64 object-cover rounded-full border-4 border-indigo-100"
          />
          <h3 className="mt-6 text-xl font-medium">Prasad Nayak</h3>
          <p className="mt-2 text-gray-500">Founder & Developer</p>
        </div>

        <div className="max-w-xl text-gray-600 text-base leading-7">
          <p>
            Tradr was created with a simple goal to make market information
            easier to understand and investing tools easier to use.
          </p>
          <p className="mt-6">
            As the developer behind Tradr, I designed and built the platform to
            bring market tracking, portfolio management, and investment insights
            together in one modern experience.
          </p>
          <p className="mt-6">
            I'm continuously learning and improving Tradr by exploring new
            technologies and finding better ways to create useful experiences
            for modern investors.
          </p>
          <p className="mt-6">
            Connect with me on{" "}
            <Link
              to="https://www.linkedin.com/in/nayakprasad/"
              target="_blank"
              className="text-indigo-600 hover:text-indigo-800"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link
              to="https://github.com/PrasadNayak01"
              target="_blank"
              className="text-indigo-600 hover:text-indigo-800"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
