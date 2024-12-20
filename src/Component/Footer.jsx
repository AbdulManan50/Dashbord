import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdNotificationsOff } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <div className="bg-[#20232A] h-[8vh] w-full sticky top-0 right-0 py-5">
        <div className="flex px-5 justify-end  items-center gap-10 text-2xl text-white">
          <div className="cursor-pointer">
            <FiSearch />
          </div>
          <div className="cursor-pointer">
            <IoMdNotificationsOff />
          </div>
          <div className="cursor-pointer">
            <FaRegMessage />
          </div>
        </div>
      </div>
    </>
  );
}
