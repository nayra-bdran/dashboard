import React, { lazy, Suspense } from "react";
import { assets } from "../assets/assets";

// Lazy load
const RecentDeals = lazy(() => import("./RecentDeals"));
const CustomersCard = lazy(() => import("./CustomersCard"));

const Dash = () => {
  return (
    <div className="flex min-h-screen ">
      <div className="flex-1 space-y-6 md:px-6  px-0 ">
        <div className="flex flex-wrap gap-6 justify-center ">
          {/* Left Column */}
          <div className="w-full max-w-[320px] min-w-[280px] flex-1 space-y-6 lg:px-0 px-3">
            <div className="relative leading-10 bg-[#514EF3]  text-white rounded-2xl p-6 shadow-md overflow-hidden">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
              <div className="flex justify-between items-center mb-4 ">
                <h3 className="text-md font-semibold">Next Appointment</h3>
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#ECECFE]"></div>
                <div>
                  <p className="font-semibold">319 Haul Road</p>
                  <p className="text-sm text-white/80">Glenrock, WY 12345</p>
                </div>
              </div>

              <div className="mb-4 mt-6">
                <p className="text-xs text-white/70">Appointment Date</p>
                <p className="font-semibold">Nov 18 2021, 17:00</p>
              </div>

              <div className="flex justify-left gap-6 text-sm mb-2">
                <div>
                  <p className="text-white/70">Room Area</p>
                  <p className="font-bold">100 ㎡</p>
                </div>
                <div>
                  <p className="text-white/70">People</p>
                  <p className="font-bold">10</p>
                </div>
              </div>

              {/* الزر في نص الدايرة */}
              <div className="relative  flex justify-between ">
                <div className="">
                  <p className="text-white/70 text-sm">Price</p>
                  <p className="font-bold text-lg">$5750</p>
                </div>
                <button className="bg-white text-[#092C4C] px-5  rounded-full text-sm font-medium ">
                  See Detail
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between ">
              <div>
                <p className="text-xl text-gray-500 mb-2">Customers</p>
                <p className="text-2xl font-bold text-gray-700">78</p>
              </div>
              <div className="flex items-center justify-center rounded-full text-white">
                <img src={assets.Icon1} alt="icon" />
              </div>
            </div>

            <div className="bg-white rounded-2xl px-4 min-h-[100px]  flex items-center justify-between ">
              <div>
                <p className="text-xl text-gray-500 mb-2">Deals</p>
                <p className="text-2xl font-bold text-gray-700">136</p>
              </div>
              <div className=" flex items-center justify-center rounded-full text-white">
                <img src={assets.Icon} alt="icon" />
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="w-full max-w-[510px] min-w-[320px] flex-1">
            <Suspense fallback={<div>Loading deals...</div>}>
              <RecentDeals />
            </Suspense>
          </div>

          {/* Right Column */}
          <div className="w-full max-w-[460px] min-w-[320px] flex-1 bg-[#EEF6FB]">
            <Suspense fallback={<div>Loading customers...</div>}>
              <CustomersCard />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
