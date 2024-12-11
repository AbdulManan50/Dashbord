import React from "react";
import Overview from "./pages/Overview";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { GrOverview } from "react-icons/gr";

export default function App() {
  return (
    <>
      <div className="flex">
        <Header />
        <div className="w-full">
          <Footer />
          <Overview />
        </div>
      </div>
    </>
  );
}
