import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/landing_page/home/Home";
import Signup from "./components/landing_page/signup/Signup";
import About from "./components/landing_page/about/About";
import Products from "./components/landing_page/products/Products";
import Pricing from "./components/landing_page/pricing/Pricing";
import Support from "./components/landing_page/support/Support";
import Navbar from "./components/landing_page/Navbar";
import Footer from "./components/landing_page/Footer";
import NotFound from "./components/landing_page/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
