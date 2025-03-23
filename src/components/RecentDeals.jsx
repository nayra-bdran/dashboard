import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { assets } from "../assets/assets";

const deals = [
  {
    id: 1,
    title: "319 Haul Road",
    location: "Glenrock,, WY",
    date: "Nov 14, 07:00 AM",
    price: "$5750",
    img: assets.Image,
  },
  {
    id: 2,
    title: "47 Spruce Drive",
    location: "Quantico,, VA",
    date: "Nov 15, 08:00 AM",
    price: "$5750",
    img: assets.Image1,
  },
  {
    id: 3,
    title: "165 Belmont Drive",
    location: "Parowan,, UT",
    date: "Nov 16, 09:00 AM",
    price: "$5750",
    img: assets.Image1,
  },
  {
    id: 4,
    title: "1538 Hammer Road",
    location: "Cleveland,, OH",
    date: "Nov 17, 10:00 AM",
    price: "$5750",
    img: assets.Image,
  },
];

const activities = [
  {
    id: 1,
    date: "17 Nov 2021",
    description: "Installation of the new air conditioning system",
  },
  {
    id: 2,
    date: "17 Nov 2021",
    description: "Installation of the new air conditioning system",
  },
];

const RecentDeals = () => {
  return (
    <div className="space-y-6 lg:px-0 px-3 ">
      <div className="bg-[#FFFFFF] rounded-2xl p-4 w-full shadow-md min-h-[350px] ">
        <div className="flex justify-between items-center mb-6 py-3">
          <h3 className="text-sm font-semibold text-[#092C4C]">Recent Deals</h3>
          <button className="text-sm text-[#514EF3] font-medium">
            View All
          </button>
        </div>
        <div className="space-y-6 ">
          {deals.map((deal) => (
            <div key={deal.id} className="flex justify-between  items-center">
              <div className="flex items-center gap-3">
                <img
                  src={deal.img}
                  alt={deal.title}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {deal.title}
                  </p>
                  <p className="text-xs text-[#7E92A2]">{deal.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm text-gray-800">
                  {deal.price}
                </p>
                <p className="text-xs text-[#7E92A2]">{deal.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Section */}
      <div className="bg-[#FFFFFF] rounded-2xl w-full shadow-md">
        <div className="flex justify-between flex-wrap items-center gap-4 p-4 border-b border-[#ECECFE]">
          <div className="flex items-center gap-3">
            <img
              src={assets.Image}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">1824 Turkey Pen Road</p>
              <p className="text-xs text-gray-400">Cleveland, OH 12345</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-[#ECECFE] text-[#514EF3] px-3 py-2 rounded-full font-medium">
              IN PROGRESS
            </span>
            <FiArrowRight className="text-gray-400" />
          </div>
        </div>

        <div className="px-6 py-4 space-y-6">
          <div className="border-l-2 border-[#ECECFE] pl-6">
            {activities.map((act) => (
              <div key={act.id} className="relative mb-6">
                <div className="absolute -left-[34px] top-0 w-6 h-6 rounded-full bg-[#514EF3] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <p className="text-xs text-gray-400 mb-1">{act.date}</p>
                <p className="text-sm text-gray-700 font-medium">
                  {act.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[#514EF3] font-semibold cursor-pointer">
            Load More
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentDeals;
