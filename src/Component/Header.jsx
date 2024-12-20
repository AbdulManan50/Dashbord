import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LuLibrary } from "react-icons/lu";
import { AiFillProduct } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setopen] = useState(true);
  const toggle = () => {
    setopen(!open);
  };

  return (
    <>
      <div
        className={`  h-[100vh] border-r-[1px]  sticky border-white ${
          open ? "w-[100%]" : ""
        }`}
      >
        <div className="px-5 py-4">
          <div className="flex justify-between items-center gap-10">
            <h1
              className={`text-2xl font-poppines font-semibold text-white ${
                open ? "block" : "hidden"
              }`}
            >
              Dashbord
            </h1>
            <h1
              onClick={toggle}
              className={`text-3xl p-3 rounded-lg hover:text-white hover:bg-lightblue text-lightblue cursor-pointer items-center open ${
                open ? "block" : "mx-auto"
              }`}
            >
              <LuLibrary />
            </h1>
          </div>
          <div className="pt-5 flex flex-col space-y-10">
            <Link   to="/">
              <div className="flex gap-8 p-3 cursor-pointer text-white hover:bg-lightblue text-2xl rounded-lg">
                <RxHamburgerMenu />
                {open && (
                  <h1 className="text-base font-poppines font-medium">
                    OverView
                  </h1>
                )}
              </div>
            </Link>
            <Link to="/products">
              <div className="flex gap-8 p-3 cursor-pointer text-white hover:bg-lightblue text-2xl rounded-lg">
                <AiFillProduct />
                {open && (
                  <h1 className="text-base font-poppines font-medium">
                    Products
                  </h1>
                )}
              </div>
            </Link>
            <Link to="/sales">
              <div className="flex gap-8 p-3 cursor-pointer text-white hover:bg-lightblue text-2xl rounded-lg">
                <FaDollarSign />
                {open && (
                  <h1 className="text-base font-poppines font-medium">Sales</h1>
                )}
              </div>
            </Link>
            <Link to="/user">
              <div className="flex gap-8 p-3 cursor-pointer text-white hover:bg-lightblue text-2xl rounded-lg">
                <FaUserTie />
                {open && (
                  <h1 className="text-base font-poppines font-medium">Users</h1>
                )}
              </div>
            </Link>
            <Link to="/order">
              <div className="flex gap-8 p-3 cursor-pointer text-white hover:bg-lightblue text-2xl rounded-lg">
                <FaCartArrowDown />
                {open && (
                  <h1 className="text-base font-poppines font-medium">
                    Orders
                  </h1>
                )}
              </div>
            </Link>
            <Link to="/setting">
              <div className="flex gap-8 p-3 cursor-pointer text-white hover:bg-lightblue text-2xl rounded-lg">
                <IoSettings />
                {open && (
                  <h1 className="text-base font-poppines font-medium">
                    Setting
                  </h1>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
