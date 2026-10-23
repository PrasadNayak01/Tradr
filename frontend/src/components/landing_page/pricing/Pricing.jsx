import React from "react";
import Hero from "./Hero";
import Charges from "./Charges";
import OpenAccount from "../home/OpenAccount";
import Brokerage from "./Brokerage";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Charges />
      <Brokerage />
      <Footer />
    </>
  );
};

export default Pricing;
