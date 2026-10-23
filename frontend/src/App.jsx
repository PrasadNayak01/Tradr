import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/landing_page/home/Home";
import Signup from "./components/landing_page/signup/Signup";
import About from "./components/landing_page/about/About";
import Products from "./components/landing_page/products/Products";
import Pricing from "./components/landing_page/pricing/Pricing";
import Support from "./components/landing_page/support/Support";
import NotFound from "./components/landing_page/NotFound";

import Dashboard from "./components/dashboard/dashboard/Dashboard";
import Markets from "./components/dashboard/markets/Markets";
import Stock from "./components/dashboard/stock/Stock";
import Watchlist from "./components/dashboard/watchlist/Watchlist";
import Orders from "./components/dashboard/orders/Orders";
import Holdings from "./components/dashboard/holdings/Holdings";
import Positions from "./components/dashboard/positions/Positions";
import Funds from "./components/dashboard/funds/Funds";
import Settings from "./components/dashboard/settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/stock/:symbol" element={<Stock />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
