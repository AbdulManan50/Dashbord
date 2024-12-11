import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import Chart from "react-apexcharts";

export default function Overview() {
  return (
    <>
      <div className="bg-[#20232A] h-[95vh]">
        <div className="flex px-5">
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
            <div>
              <div className=" w-1/2 space-y-5 rounded-xl bg-[#32363E] p-5">
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
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div></div>
      </div>
    </>
  );
}
