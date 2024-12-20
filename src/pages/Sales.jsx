import React from "react";
import Footer from "../Component/Footer";
import { AiOutlineBarChart } from "react-icons/ai";
import { IoCart } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import Chart from "react-apexcharts";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

export default function Sales() {
  const chartData = {
    series: [
      {
        name: "Sales",
        data: [
          5000, 7500, 7200, 8000, 8800, 5500, 4900, 5300, 5800, 5900, 6400,
          8200,
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "100%",
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "12px",
          },
        },
      },
      fill: {
        type: "solid",
        colors: ["#0DD0C6"],
      },
      tooltip: { theme: "dark" },
      stroke: {
        curve: "smooth",
        width: 1,
        colors: ["#00CEC3"],
      },
    },
  };

  return (
    <>
      <div className="h-[calc(100vh-3.5rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar">
        <div className="px-5 flex gap-5 bg-[#20232A] pb-5">
          <div className="bg-[#33373E] text-white p-6 rounded-lg w-1/3 shadow-md font-poppines space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Sales Figures</h2>
              <div className="bg-teal-500 p-2 rounded-full">
                <AiOutlineBarChart size={30} color="white" />
              </div>
            </div>
            <div className="">
              <p className="text-3xl font-semibold">5,325,235</p>
            </div>
            <div className=" text-[#89b9bd] text-sm flex items-center">
              <p>Revenue Breakdown</p>
              <span className="ml-1 text-[#89b9bd]">&uarr; +6%</span>
            </div>
          </div>
          <div className="bg-[#33373E] text-white p-6 rounded-lg w-1/3 shadow-md font-poppines space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Average order amount</h2>
              <div className="bg-teal-500 p-2 rounded-full">
                <IoCart size={30} color="white" />
              </div>
            </div>
            <div className="">
              <p className="text-3xl font-semibold">₹868.02</p>
            </div>
            <div className=" text-[#89b9bd] text-sm">
              <p>Per-order average</p>
            </div>
          </div>
          <div className="bg-[#33373E] text-white p-6 rounded-lg w-1/3 shadow-md font-poppines space-y-5">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Total Earnings</h2>
              <div className="bg-teal-500 p-2 rounded-full">
                <BiDollar size={30} color="white" />
              </div>
            </div>
            <div className="">
              <p className="text-3xl font-semibold">₹1,23,286 </p>
            </div>
            <div className=" text-[#89b9bd] text-sm">
              <p>Monthly Revenue</p>
            </div>
          </div>
        </div>
        <div className="bg-[#20232A] pb-20 text-white p-8">
          <div className="flex gap-5">
            <div className="bg-[#33373E] p-4 rounded-lg w-[65%]">
              <h2 className="text-lg font-bold mb-4">Sales Overview</h2>
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={300}
              />
            </div>
            <div className="w-[35%] space-y-5">
              <div className="bg-[#13727A] p-8 rounded-lg flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold font-poppines">
                    Conversion Rate
                  </h3>
                  <p className="text-3xl font-bold font-poppines pt-14">
                    15.6%
                  </p>
                </div>
                <div className="p-3 bg-white text-black rounded-full">
                  <FiTrendingUp size={32} />
                </div>
              </div>
              <div className="bg-[#0DD0C6] p-8 rounded-lg flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold font-poppines">
                    Sales Growth
                  </h3>
                  <p className="text-3xl font-bold pt-14 font-poppines">
                    12.3%
                  </p>
                </div>
                <div className="p-3 bg-white text-black rounded-full">
                  <FiTrendingDown size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
