import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { assets } from "../assets/assets";
import TableHeader from "./TableHeader";

const allDeals = [
  {
    id: 1,
    image:assets.Image1,
    name: "475 Spruce Drive, Pittsburgh, PA 23592",
    area: "100M²",
    date: "Nov 14, 2021 07:00 AM",
    price: "$6000",
    status: "IN PROGRESS",
  },
  {
    id: 2,
    image:assets.Image,
    name: "1952 Chicago Avenue, Fresno, CA 93711",
    area: "100M²",
    date: "Nov 15, 2021 06:00 AM",
    price: "$6000",
    status: "CLOSED",
  },
  {
    id: 3,
    image:assets.Image1,
    name: "4409 Haul Road, Saint Paul, MN 55102",
    area: "100M²",
    date: "Nov 16, 2021 09:00 AM",
    price: "$6000",
    status: "IN PROGRESS",
  },
  {
    id: 4,
    image:assets.Image,
    name: "579 Godfrey Street, Monitor, OR 97071",
    area: "100M²",
    date: "Nov 17, 2021 10:00 AM",
    price: "$6000",
    status: "CLOSED",
  },
  {
    id: 5,
    image:assets.Image1,
    name: "2705 Canterbury Drive, New York, NY 10011",
    area: "100M²",
    date: "Nov 20, 2021 07:00 AM",
    price: "$6000",
    status: "IN PROGRESS",
  },
  {
    id: 6,
    image:assets.Image,
    name: "579 Godfrey Street, Monitor, OR 97071",
    area: "100M²",
    date: "Nov 17, 2021 10:00 AM",
    price: "$6000",
    status: "CLOSED",
  },
  {
    id: 7,
    image:assets.Image1,
    name: "2705 Canterbury Drive, New York, NY 10011",
    area: "100M²",
    date: "Nov 20, 2021 07:00 AM",
    price: "$6000",
    status: "IN PROGRESS",
  },
];

const statusColors = {
  "IN PROGRESS": "bg-[#ECECFE] text-[#514EF3]",
  CLOSED: "bg-[#ECECFE] text-blue-600",
};

export default function DealsTable() {
  const [deals, setDeals] = useState(allDeals);

  return (
    <div className="p-4 bg-[#F6FAFDE5] rounded-xl ">
      {/* Header */}
     <TableHeader tittel="deals"/>

      {/* Table - Desktop */}
      <div className="hidden lg:block ">
      <table className="w-full  text-sm text-left  rounded-xl ">
      <thead>
          <tr className="text-[#7E92A2] border-b border-[#ECECFE]">
          <td className="py-3 px-4 flex items-center gap-4">
                  <img
                    src={assets.Icon2}
                    alt="image"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="">Name</span>
                </td>
              <td className="px-4">Area</td>
              <td className="px-4">Appointment Date</td>
              <td className="px-4">Price</td>
              <td className="px-4">Status</td>
              <td className="px-4">Edit</td>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.id} className=" text-[#092C4C] border-b border-[#ECECFE] hover:bg-gray-50">
                <td className="py-3 px-4 flex max-w-[250px] whitespace-nowrap items-center gap-4">
                  <img
                    src={deal.image}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="">{deal.name}</span>
                </td>
                <td className="px-4">{deal.area}</td>
                <td className="px-4">{deal.date}</td>
                <td className="px-4">{deal.price}</td>
                <td className="px-4">
                  <span
                    className={`text-xs text-center  px-4 py-2 rounded-full ${statusColors[deal.status]}`}
                  >
                    {deal.status}
                  </span>
                </td>
                <td className="px-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <FiEdit2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-4">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="bg-[#F6FAFDE5] rounded-lg p-4 shadow-sm space-y-2"
          >
            
            <div className="flex items-center gap-3">
              <img
                src={deal.image}
                alt=""
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className=" text-xs leading-6">{deal.name}</span>
              <button className="text-gray-400 hover:text-gray-600 text-sm">
                <FiEdit2 />
              </button>
            </div>
            <div className="text-xs text-gray-600">Area: {deal.area}</div>
            <div className="text-xs text-gray-600">Appointment: {deal.date}</div>
            <div className="text-xs text-[#7E92A2]">Price: {deal.price}</div>
            <div>
              <span
                className={`text-xs  px-3 py-1 rounded-full ${statusColors[deal.status]}`}
              >
                {deal.status}
              </span>
            </div>
            <div>
             
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-6">
        <button className="text-sm px-8 py-4  rounded-full bg-white hover:bg-gray-50">
          Load More
        </button>
      </div>
    </div>
  );
}
