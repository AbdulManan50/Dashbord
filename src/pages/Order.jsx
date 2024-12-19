import React from "react";
import Footer from "../Component/Footer";
import { FiShoppingBag } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import Chart from "react-apexcharts";

export default function Order() {
  const dailyOrdersOptions = {
    chart: {
      id: "daily-orders",
      toolbar: { show: false },
      animations: { enabled: true },
    },
    xaxis: {
      categories: [
        "07/01",
        "07/02",
        "07/03",
        "07/04",
        "07/05",
        "07/06",
        "07/07",
      ],
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00CEC3"],
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
        colors: "#000000",
      },
      theme: "dark",
    },
    markers: {
      size: 3,
      colors: ["#00CEC3"],
      hover: { size: 7 },
    },
  };

  const dailyOrdersSeries = [
    {
      name: "orders",
      data: [60, 65, 40, 70, 65, 68, 78],
    },
  ];

  const orderStatusOptions = {
    chart: {
      id: "order-status",
    },
    labels: ["Pending", "Processing", "Shipped", "Delivered"],
    colors: ["#13727A", "#13727A", "#3E9495", "#4DA8A9"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#fff", 
      },
     
    },
    dataLabels: {
      style: {
        colors: ["#fff"], 
      },
    },
  };

  const orderStatusSeries = [10, 17, 24, 49];

  return (
    <>
      <Footer />
      <div className=" h-[calc(100vh-3.5rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar">
        <div className="flex gap-5 bg-[#20232A] py-10 px-5">
          <div className="bg-[#33373E] w-1/4 p-5 rounded-xl flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white font-poppines">
                Orders Count
              </h3>
              <p className="text-3xl font-bold text-white font-poppines pt-5 pb-10">
                2,056
              </p>
            </div>
            <div className="bg-[#FFF4E5] p-3 rounded-full">
              <FiShoppingBag className="text-yellow-600 text-2xl" />
            </div>
          </div>
          <div className="bg-[#33373E] w-1/4 p-5 rounded-xl flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white font-poppines">
                Orders Pending
              </h3>
              <p className="text-3xl font-bold text-white font-poppines pt-5 pb-10">
                326
              </p>
            </div>
            <div className="bg-[#EBFAF2]  p-3 rounded-full">
              <MdAccessTime className="text-[#4CAF50] text-2xl" />
            </div>
          </div>
          <div className="bg-[#33373E] w-1/4 p-5 rounded-xl flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white font-poppines">
                Completed Orders
              </h3>
              <p className="text-3xl font-bold text-white font-poppines pt-5 pb-10">
                1,538
              </p>
            </div>
            <div className="bg-[#E5FAFB] p-3 rounded-full">
              <FaRegCheckCircle className="text-[#2196F3] text-2xl" />
            </div>
          </div>
          <div className="bg-[#33373E] w-1/4 p-5 rounded-xl flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white font-poppines">
                Total Revenue
              </h3>
              <p className="text-3xl font-bold text-white font-poppines pt-5 pb-10">
                ₹5,32,424
              </p>
            </div>
            <div className="bg-[#FDF3F5] p-3 rounded-full">
              <LuDollarSign className="text-[#F44336] text-2xl" />
            </div>
          </div>
        </div>
        <div className="px-5 bg-[#20232A] text-white pb-20">
          <div className="flex gap-6">
            <div className="bg-[#33373E] w-1/2 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl mb-4 font-poppines">Daily Orders</h2>
              <Chart
                options={dailyOrdersOptions}
                series={dailyOrdersSeries}
                type="line"
                height={300}
              />
            </div>
            <div className="bg-[#33373E] w-1/2 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl mb-4 font-poppines">
                Order Status Breakdown
              </h2>
              <Chart
                options={orderStatusOptions}
                series={orderStatusSeries}
                type="pie"
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
