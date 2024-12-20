import React from "react";
import Overview from "./pages/Overview";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { GrOverview } from "react-icons/gr";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import User from "./pages/User";
import Order from "./pages/Order";
import Setting from "./pages/Setting";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex w-full">
          <div className="w-auto bg-[#282C34]">
            <Header />
          </div>
          <div className="w-full">
            <Footer />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/products" element={<Products />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/user" element={<User />} />
              <Route path="/order" element={<Order />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
