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

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <Header />
          <div className="w-full">
            <Routes>
              {/* <Route path="/" element={<Overview />} />
              <Route path="/" element={<Products />} />
              <Route path="/" element={<Sales />} />
              <Route path="/" element={<User />} /> */}
              <Route path="/" element={<Order />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
