import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Chart from "react-apexcharts";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaSignal } from "react-icons/fa6";
import Footer from "../Component/Footer";

export default function Overview() {
  return (
    <>
      <div className="flex flex-col">   
        <div className="bg-[#20232A] w-full  h-[calc(100vh-3.5rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar ">
          <div className="flex  gap-5 px-5">
            <div className="w-1/2 flex flex-col gap-5">
              <div className="w-full flex gap-5">
                <div className=" w-1/2 space-y-5 rounded-xl bg-[#13727A] p-5">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl font-bold font-poppines text-white">
                        Earnings
                      </h1>
                    </div>
                    <div className="p-3 bg-white rounded-full text-lightblue text-xl">
                      <FaDollarSign />
                    </div>
                  </div>
                  <h1 className="text-3xl font-medium font-poppines text-white">
                    ₹6,32,424
                  </h1>
                  <h1 className="text-white font-poppines text-base">
                    Monthly Revenue
                  </h1>
                </div>
                <div className=" w-1/2 rounded-xl bg-[#32363E] p-5">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl font-bold font-poppines text-white">
                        New Users
                      </h1>
                    </div>
                    <div className="p-3 bg-lightblue rounded-full text-white text-xl">
                      <FaUserGroup />
                    </div>
                  </div>
                  <h1 className="text-xl font-medium font-poppines text-white">
                    1,833
                  </h1>
                  <Chart
                    type="area"
                    height={130}
                    width={250}
                    series={[
                      {
                        data: [100, 35, 10, 90, 55, 88, 100],
                      },
                    ]}
                    options={{
                      chart: {
                        toolbar: { show: false },
                      },
                      xaxis: {
                        categories: ["A", "B", "C", "D", "E"],
                        labels: { show: false },
                      },
                      yaxis: {
                        labels: { show: false },
                        show: false,
                      },
                      colors: ["#13727A"],
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        width: 1,
                        curve: "smooth",
                      },
                      fill: { opacity: 1 },
                      grid: {
                        show: false,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="w-full flex gap-5">
                <div className=" w-1/2 space-y-3 rounded-xl bg-[#32363E] p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-xl font-bold font-poppines text-white">
                        Total Sales
                      </h1>
                    </div>
                    <div className="p-3 bg-lightblue rounded-full text-white text-xl">
                      <BsLightningChargeFill />
                    </div>
                  </div>
                  <h1 className="text-xl font-medium font-poppines text-white">
                    35,562
                  </h1>
                </div>
                <div className=" w-1/2 space-y-3 rounded-xl bg-[#32363E] p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-xl font-bold font-poppines text-white">
                        Conversion Rate
                      </h1>
                    </div>
                    <div className="p-3 bg-lightblue rounded-full text-white text-xl">
                      <FaSignal />
                    </div>
                  </div>
                  <h1 className="text-xl font-medium font-poppines text-white">
                    15.6%
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-[#32363E] p-5 rounded-2xl">
              <div>
                <h1 className="text-xl font-semibold font-poppines text-white">
                  Sales Overview
                </h1>
                <Chart
                  type="bar"
                  height={300}
                  width="100%"
                  series={[
                    {
                      name: "wordpress developer",
                      data: [
                        10000, 7500, 5000, 2500, 6400, 2000, 3000, 1500, 4000,
                        6000, 3500, 8000,
                      ],
                    },
                  ]}
                  options={{
                    chart: {
                      toolbar: { show: false }, // Hide toolbar
                    },
                    xaxis: {
                      categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      labels: {
                        style: {
                          colors: "white", // Text color for x-axis labels
                          fontSize: "14px", // Font size for better visibility
                        },
                      },
                    },
                    yaxis: {
                      labels: {
                        style: {
                          colors: "white", // Text color for y-axis labels
                          fontSize: "14px",
                        },
                      },
                      title: {
                        style: {
                          color: "#FFFFFF", // Color of y-axis title
                          fontSize: "16px",
                        },
                      },
                    },
                    colors: ["#13727A"], // Custom bar colors
                  }}
                />
              </div>
            </div>
          </div>
          <div className="px-5 py-4 ">
            <Chart
              className="bg-[#32363E] rounded-lg "
              type="line"
              height={350}
              width="100%"
              series={[
                {
                  name: "Monthly Active Users",
                  data: [
                    1200, 1500, 1400, 1700, 1800, 1750, 1900, 1850, 2000, 2100,
                    2050, 2200,
                  ],
                },
              ]}
              options={{
                chart: {
                  toolbar: { show: false },
                },
                xaxis: {
                  categories: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  labels: {
                    style: {
                      colors: "#FFFFFF", // X-axis text color
                      fontSize: "12px",
                    },
                  },
                },
                stroke: {
                  curve: "smooth",
                  width: 3,
                  colors: ["#00CEC3"],
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
