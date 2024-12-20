import React from "react";
import Footer from "../Component/Footer";

export default function Setting() {
  return (
    <>
      <div className="px-5  bg-[#20232A] h-[calc(100vh-3.5rem)] pb-10 overflow-y-scroll overflow-x-hidden custom-scrollbar ">
        <div className="flex gap-5">
          <div className="p-4 space-y-3 w-[30%] bg-[#33373E] rounded-xl">
            <h1 className="font-poppines text-xl text-white">
              Account Settings
            </h1>
            <div className="space-y-5">
              <h1 className="font-poppines text-white">Profile</h1>
              <h1 className="font-poppines text-white">Security</h1>
              <h1 className="font-poppines text-white">Privacy</h1>
              <h1 className="font-poppines text-white">Notifications</h1>
              <h1 className="font-poppines text-white">Connected Apps</h1>
            </div>
          </div>
          <div className="w-[70%] space-y-8">
            <div className="bg-[#33373E] p-4 rounded-xl">
              <h1 className="text-2xl text-white font-poppines pb-5">
                Profile Settings
              </h1>
              <div>
                <form>
                  <div className="mb-4">
                    <label className="text-white font-poppines pb-2">
                      Username
                    </label>
                    <input
                      className="text-xl p-2 text-white rounded-lg bg-[#444A53] outline-none w-full"
                      type="text"
                      placeholder="Enter Your Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-white font-poppines pb-2">
                      Email
                    </label>
                    <input
                      className="text-xl p-2 text-white rounded-lg w-full bg-[#444A53]"
                      type="email"
                      placeholder="Enter Your Username"
                    />
                  </div>
                  <button className="text-white font-poppines px-4 py-2 bg-[#105C5C] rounded-lg">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
            <div className="bg-[#33373E] p-4 rounded-xl">
              <h1 className="text-2xl text-white font-poppines pb-5">
                Security Settings
              </h1>
              <div>
                <form>
                  <div className="mb-4">
                    <label className="text-white font-poppines pb-2">
                      Username
                    </label>
                    <input
                      className="text-xl p-2 text-white rounded-lg bg-[#444A53] outline-none w-full"
                      type="text"
                      placeholder="Enter Your Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-white font-poppines pb-2">
                      Email
                    </label>
                    <input
                      className="text-xl p-2 text-white rounded-lg w-full bg-[#444A53]"
                      type="email"
                      placeholder="Enter Your Username"
                    />
                  </div>
                  <button className="text-white font-poppines px-4 py-2 bg-[#105C5C] rounded-lg">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
            <div className="bg-[#33373E] p-4 rounded-xl">
              <h1 className="text-2xl text-white font-poppines pb-5">
                User Settings
              </h1>
              <div>
                <form>
                  <div className="mb-4">
                    <label className="text-white font-poppines pb-2">
                      Username
                    </label>
                    <input
                      className="text-xl p-2 text-white rounded-lg bg-[#444A53] outline-none w-full"
                      type="text"
                      placeholder="Enter Your Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="text-white font-poppines pb-2">
                      Email
                    </label>
                    <input
                      className="text-xl p-2 text-white rounded-lg w-full bg-[#444A53]"
                      type="email"
                      placeholder="Enter Your Username"
                    />
                  </div>
                  <button className="text-white font-poppines px-4 py-2 bg-[#105C5C] rounded-lg">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
