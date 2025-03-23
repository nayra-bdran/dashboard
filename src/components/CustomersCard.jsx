import React from "react";
import { FiEdit2, FiArrowRight } from "react-icons/fi";
import { assets } from "../assets/assets";

const customers = [
  {
    id: 1,
    name: "Deanna Annis",
    email: "deannannis@gmail.com",
    img: assets.Image,
  },
  {
    id: 2,
    name: "Andrea Willis",
    email: "andreawillis@gmail.com",
    img: assets.Image1,
  },
  {
    id: 3,
    name: "Brent Rodrigues",
    email: "brodrigues@gmail.com",
    img: assets.Image,
  },
];

const tasks = [
  {
    id: 1,
    date: "30 Nov 2021",
    title: "Meeting with partners",
    important: true,
  },
  {
    id: 2,
    date: "24 Dec 2021",
    title: "Web conference agenda",
    important: true,
  },
  {
    id: 3,
    date: "24 Oct 2022",
    title: "Lunch with Steve",
    important: false,
  },
  {
    id: 4,
    date: "24 Nov 2022",
    title: "Meeting with partners",
    important: false,
  },
  {
    id: 5,
    date: "24 Nov 2022",
    title: "Weekly meeting",
    important: false,
  },
  {
    id: 6,
    date: "24 Nov 2022",
    title: "Add new services",
    important: false,
  },
];

const CustomersCard = () => {
  return (
    <div className="space-y-6 bg-[#EEF6FB] lg:px-0 px-3">
      {/* Customers Card */}
      <div className="bg-[#EEF6FBE5] rounded-2xl p-4 w-full ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-gray-700">Customers</h3>
          <button className="text-sm text-blue-500 font-medium">
            View All
          </button>
        </div>

        <div className="space-y-6">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={customer.img}
                  alt={customer.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {customer.name}
                  </p>
                  <p className="text-xs text-gray-400">{customer.email}</p>
                </div>
              </div>

              <FiEdit2 className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Tasks Card */}
      <div className="bg-[#F6FAFD] rounded-2xl p-4 m-6 ">
        <div className="flex justify-between items-center mb-4 ">
          <h3 className="text-sm font-semibold text-gray-700">Tasks To Do</h3>
          <button className="text-sm text-[#514EF3] font-medium">
            View All
          </button>
        </div>

        <div className="space-y-6">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center gap-3">
              <p
                className={`text-xs ${
                  task.important
                    ? "text-[#FE8084] font-semibold"
                    : "text-gray-400"
                }`}
              >
                {task.date}
              </p>
              <div className="flex items-center gap-2">
                {task.important && (
                  <span className="w-2 h-2 bg-[#FE8084] rounded-full"></span>
                )}
                <p className="text-sm text-gray-700">{task.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4 pt-3 w-full bg-white rounded-xl px-3 py-2 shadow-sm">
          <input
            type="text"
            placeholder="Add new task"
            className="flex-1 text-sm px-2 py-1 outline-none text-gray-600 placeholder-gray-400 bg-transparent"
          />
          <button className="text-[#514EF3] text-lg">
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;
