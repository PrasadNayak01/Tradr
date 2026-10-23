import React from "react";
import Hero from "./Hero";
import ProductFeature from "./ProductFeature";
import kite from "../../../assets/images/kite.png";
import console from "../../../assets/images/console.png";
import mutualFunds from "../../../assets/images/mutualFunds.png";
import restApi from "../../../assets/images/restApi.png";
import mobile from "../../../assets/images/mobile.png";
import Universe from "./Universe";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Products = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductFeature
        image={kite}
        title="Trade smarter with Tradr"
        description="Track markets, analyze opportunities, and manage your investments with powerful tools built for modern investors."
      />
      <ProductFeature
        image={console}
        title="See your investments clearly"
        description="Track your holdings, monitor portfolio performance, and analyze your investments with clear reports and visual insights—all from one powerful dashboard."
        reverse={true}
      />
      <ProductFeature
        image={mutualFunds}
        title="Grow your portfolio with ease"
        description="Discover mutual funds, compare performance, and invest with simple tools that help you build and manage your portfolio confidently."
      />
      <ProductFeature
        image={restApi}
        title="Build with Tradr APIs"
        description="Connect your applications to Tradr with simple APIs for market data, orders, portfolio tracking, and trading workflows."
        reverse={true}
      />
      <ProductFeature
        image={mobile}
        title="Learn on the go with Tradr"
        description="Build your investing knowledge with easy-to-follow lessons, practical market concepts, and guided learning you can access anytime, anywhere."
      />
      <Universe />
      <Footer />
    </>
  );
};

export default Products;
