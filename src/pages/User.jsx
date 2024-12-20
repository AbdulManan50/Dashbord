import React from "react";
import Footer from "../Component/Footer";
import { FiUsers } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";

export default function User() {
  const users = [
    {
      name: "Amit Sharma",
      email: "amit@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      name: "Priya Singh",
      email: "priya@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Ravi Kumar",
      email: "ravi@example.com",
      role: "Customer",
      status: "Inactive",
    },
    {
      name: "Anjali Patel",
      email: "anjali@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      name: "Vikram Rao",
      email: "vikram@example.com",
      role: "Moderator",
      status: "Inactive",
    },
    {
      name: "Anjali Patel",
      email: "anjali@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      name: "Vikram Rao",
      email: "vikram@example.com",
      role: "Moderator",
      status: "Inactive",
    },
  ];
  return (
    <>
      <div className="bg-[#20232A]">
        <div className="bg-[#20232A] h-[calc(100vh-3.5rem)] overflow-y-scroll overflow-x-hidden custom-scrollbar pb-20">
          <div className="flex gap-5 bg-[#20232A] pb-5 px-5">
            <div className="bg-[#33373E] w-1/4 p-5 rounded-xl flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white font-poppines">
                  Total User
                </h3>
                <p className="text-3xl font-bold text-white font-poppines pt-5 pb-10">
                  1,23,286
                </p>
              </div>
              <div className="bg-[#FFF4E5] p-3 rounded-full">
                <FiUsers className="text-yellow-600 text-2xl" />
              </div>
            </div>
            <div className="bg-[#33373E] w-1/4 p-5 rounded-xl flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white font-poppines">
                  Today's Sign-ups
                </h3>
                <p className="text-3xl font-bold text-white font-poppines pt-5 pb-10">
                  326
                </p>
              </div>
              <div className="bg-[#EBFAF2]  p-3 rounded-full">
                <FiUserPlus className="text-[#4CAF50] text-2xl" />
              </div>
            </div>
            <div className="bg-[#33373E] w-1/4 p-5 rounded-xl flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white font-poppines">
                  Current Users
                </h3>
                <p className="text-3xl font-bold text-white font-poppines pt-5 pb-10">
                  82,561
                </p>
              </div>
              <div className="bg-[#E5FAFB] p-3 rounded-full">
                <FiUserCheck className="text-[#2196F3] text-2xl" />
              </div>
            </div>
            <div className="bg-[#33373E] w-1/4 p-5 rounded-xl flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white font-poppines">
                  Attrition Rate
                </h3>
                <p className="text-3xl font-bold text-white font-poppines pt-5 pb-10">
                  3.6%
                </p>
              </div>
              <div className="bg-[#FDF3F5] p-3 rounded-full">
                <FiUserX className="text-[#F44336] text-2xl" />
              </div>
            </div>
          </div>
          <div className="px-5 ">
            <div className="bg-[#33373E] pb-10 text-white p-8 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold font-poppines ">
                  Users List
                </h2>
                <input
                  type="text"
                  placeholder="Search users..."
                  className="p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b font-poppines border-gray-700">
                      <th className="p-2 font-normal">NAME</th>
                      <th className="p-2 font-normal">EMAIL</th>
                      <th className="p-2 font-normal">ROLE</th>
                      <th className="p-2 font-normal">STATUS</th>
                      <th className="p-2 font-normal">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="p-2 flex items-center gap-2">
                          <div className="rounded-full">
                            <img
                              className="w-10 rounded-full"
                              src="Image/user.jpg"
                              alt=""
                            />
                          </div>
                          <span className="font-semibold">{user.name}</span>
                        </td>
                        <td className="p-2 text-gray-300">{user.email}</td>
                        <td className="p-2">
                          <span className="bg-[#13727A] text-white px-2 py-1 rounded-full text-sm">
                            {user.role}
                          </span>
                        </td>
                        <td className="p-2">
                          <span
                            className={`px-2 py-1 rounded-full text-sm ${
                              user.status === "Active"
                                ? "bg-green-600 text-white"
                                : "bg-red-600 text-white"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="p-2">
                          <button className="text-blue-400 hover:underline mr-2">
                            Edit
                          </button>
                          <button className="text-red-400 hover:underline">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
