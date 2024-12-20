import React from "react";
import Footer from "../Component/Footer";
import { BsArrowUpRight } from "react-icons/bs";
import { FiCodesandbox } from "react-icons/fi";
import { CiWarning } from "react-icons/ci";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import Chart from "react-apexcharts";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Products() {
  const chartOptions = {

    series: [5500, 4300, 3900, 2800, 2500],
    labels: [
      "Electronics & Gadgets",
      "Apparel & Fashion",
      "Home Improve & Decor",
      "Books & Media",
      "Sports & Outdoor Gear",
    ],
    chart: {
      type: "donut",
    },
    colors: ["#66A8AB", "#13727A", "#004B53"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        labels: {
          show: true,
        },
        donut: {
          size: "70%",
        },
      },
    },
  };

 
  const products = [
    {
      name: "Wireless Earbuds",
      category: "Electronics",
      price: "$59.99",
      stock: 143,
      sales: 1200,
      image: "/Image/image1.jpg",
    },
    {
      name: "Leather Wallet",
      category: "Accessories",
      price: "$39.99",
      stock: 89,
      sales: 800,
      image: "/Image/image2.jpg",
    },
    {
      name: "Smart Watch",
      category: "Electronics",
      price: "$199.99",
      stock: 56,
      sales: 650,
      image: "/Image/image3.jpg",
    },
    {
      name: "Coffee Maker",
      category: "Home",
      price: "$79.99",
      stock: 78,
      sales: 720,
      image: "/Image/image4.jpg",
    },
    {
      name: "Yoga Mat",
      category: "Fitness",
      price: "$29.99",
      stock: 210,
      sales: 950,
      image: "/Image/image5.jpg",
    },
  ];

  return (
    <>
      <div className="h-[calc(100vh-3.5rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar ">
        <div className="flex gap-5 bg-[#20232A] px-5">
          <div className="bg-[#33373E] text-white p-5 rounded-2xl shadow-md flex justify-between items-start w-1/4 ">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold mb-2 font-poppines">
                Top Selling
              </h2>
              <p className="text-3xl font-bold font-poppines">56</p>
              <p className="text-[#89b9bd] font-poppines">+38%</p>
            </div>
            <div className="bg-[#E5FAFB] text-[#13727A] rounded-full p-2">
              <BsArrowUpRight className="text-3xl" />
            </div>
          </div>
          <div className="bg-[#33373E] text-white p-5 rounded-2xl shadow-md flex justify-between items-start w-1/4 ">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold mb-2 font-poppines">
                Total Products
              </h2>
              <p className="text-3xl font-bold font-poppines">32,424</p>
              <p className="text-[#89b9bd] font-poppines">+23%</p>
            </div>
            <div className="bg-[#FFF4E5] text-[#FEC90F] rounded-full p-2">
              <FiCodesandbox className="text-3xl" />
            </div>
          </div>
          <div className="bg-[#33373E] text-white p-5 rounded-2xl shadow-md flex justify-between items-start w-1/4 ">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold mb-2 font-poppines">
                Low Stock
              </h2>
              <p className="text-3xl font-bold font-poppines">38</p>
              <p className="text-[#89b9bd] font-poppines">+88%</p>
            </div>
            <div className="bg-[#FDF3F5] text-[#F87171] rounded-full p-2">
              <CiWarning className="text-3xl" />
            </div>
          </div>
          <div className="bg-[#33373E] text-white p-5 rounded-2xl shadow-md flex justify-between items-start w-1/4 ">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold mb-2 font-poppines">
                Total Revenue
              </h2>
              <p className="text-3xl font-bold font-poppines">₹5,32,424</p>
              <p className="text-[#89b9bd] font-poppines">+58%</p>
            </div>
            <div className="bg-[#EBFAF2] text-[#00C292] rounded-full p-2">
              <PiCurrencyDollarSimpleBold className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="flex bg-[#20232A]  pb-10 gap-8 pt-5 px-5">
          <div className="bg-[#33373E] text-white rounded-lg shadow-lg p-5 w-[40%]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold font-poppines">
                Total Sales
              </h2>
              <span className="bg-gray-700 px-2 py-1 rounded-md text-sm font-poppines">
                JAN 2024
              </span>
            </div>
            <div className="border-t border-gray-600 mb-4 font-poppines"></div>
            <div className="flex justify-between">
              <p className="text-gray-400 text-lg mb-4 font-poppines">
                Sales Yearly
              </p>
              <h3 className="text-3xl font-bold mb-6 font-poppines">
                13,32,444
              </h3>
            </div>
            <div className="relative">
              <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="donut"
                height={300}
              />
            </div>
          </div>
          <div className="bg-[#33373E] w-[60%]  p-6 rounded-lg shadow-lg text-white">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold font-poppines">
                Product List
              </h1>
              <input
                type="text"
                placeholder="Search products..."
                className="bg-gray-700 text-gray-300 px-4 py-2 rounded-md focus:outline-none font-poppines"
              />
            </div>

            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700 font-poppines">
                  <th className="py-2 font-poppines font-normal">NAME</th>
                  <th className="font-poppines font-normal">CATEGORY</th>
                  <th className="font-poppines font-normal">PRICE</th>
                  <th className="font-poppines font-normal">STOCK</th>
                  <th className="font-poppines font-normal">SALES</th>
                  <th className="font-poppines font-normal">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="font-poppines">
                {products.map((product, index) => (
                  <tr key={index} className=" border-b border-gray-700">
                    <td className="py-3 flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="font-poppines text-sm">
                        {product.name}
                      </span>
                    </td>
                    <td className="text-sm">{product.category}</td>
                    <td className="text-sm">{product.price}</td>
                    <td className="text-sm">{product.stock}</td>
                    <td className="text-sm">{product.sales}</td>
                    <td className="flex items-center gap-3">
                      <button className="text-blue-400 hover:text-blue-500">
                        <FiEdit2 size={18} />
                      </button>
                      <button className="text-red-400 hover:text-red-500">
                        <RiDeleteBin6Line size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
