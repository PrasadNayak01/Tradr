import React from "react";

const Hero = () => {
  return (
    <section className="px-6 lg:px-24 py-16">
      <div className="flex justify-center text-center">
        <h1 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          We are building a smarter way to trade, invest, and understand the
          markets.
        </h1>
      </div>

      <div className="border-b border-gray-200 mt-20"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <p className="text-base md:text-lg text-gray-600 leading-8">
            Tradr was built with a simple idea investing should be easier to
            understand and more accessible to everyone. We bring essential
            market tools together in one modern platform.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-8">
            From tracking stocks and analyzing market movements to managing your
            portfolio, Tradr helps you stay informed and organized throughout
            your investment journey.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-8">
            Our goal is to create a clean and intuitive experience where
            investors can explore opportunities and make decisions with greater
            confidence.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-base md:text-lg text-gray-600 leading-8">
            Tradr combines trading tools, portfolio tracking, market insights,
            and educational resources into one connected ecosystem.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-8">
            We believe technology can make financial information easier to
            access, understand, and use. That's why we're focused on building
            simple tools for modern investors.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-8">
            As Tradr continues to evolve, we're working towards creating a
            platform that grows with the needs of every kind of investor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
