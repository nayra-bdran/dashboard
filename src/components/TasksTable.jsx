import React from "react";
import { FiEdit2 } from "react-icons/fi";
import TableHeader from "./TableHeader";
import { assets } from "../assets/assets";

const tasks = [
  { date: "14 Nov 2021", text: "Description goes here", status: "overdue" },
  { date: "24 Dec 2021", text: "Web conference agenda (overdue)", status: "overdue" },
  { date: "24 Nov 2022", text: "Meeting with partners", status: "done" },
  { date: "24 Nov 2022", text: "Add new services", status: "default" },
  { date: "24 Nov 2022", text: "Upload new legals (terms & conditions)", status: "done" },
  { date: "24 Nov 2022", text: "Sales report due", status: "default" },
  { date: "24 Nov 2022", text: "Description goes here", status: "" },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "done":
      return assets.Icon;
    case "overdue":
      return assets.Icon1;
    case "default":
      return ;
    default:
      return null;
  }
};

export default function TasksTable() {
  return (
    <div className="p-4 md:p-6 bg-[#F8FBFF] rounded-xl shadow-sm w-full">
      {/* Header */}
      <TableHeader tittel="task" />

      {/* Table view for desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-[600px] w-full text-sm text-left rounded-xl">
          <thead>
            <tr className="text-[#7E92A2] border-b border-[#ECECFE] font-medium">
              <th className="py-3 px-4">Due Date</th>
              <th className="px-4">Task</th>
              <th className="px-4">Edit</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => {
              const icon = getStatusIcon(task.status);
              return (
                <tr key={idx} className="border-b border-[#ECECFE] hover:bg-gray-50">
                  <td className="py-5 px-4 flex items-center gap-2 whitespace-nowrap">
                    {icon ? (
                      <img src={icon} alt={task.status} className="w-5 h-5" />
                    ) : (
                      <div className="w-5 h-5" />
                    )}
                    <span className="text-gray-700">{task.date}</span>
                  </td>
                  <td className="py-5 px-4 text-gray-700">{task.text}</td>
                  <td className="py-5 px-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <FiEdit2 />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="md:hidden flex flex-col gap-4 mt-4">
        {tasks.map((task, idx) => {
          const icon = getStatusIcon(task.status);
          return (
            <div key={idx} className="bg-[#F8FBFF] p-4 rounded-xl shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                {icon ? (
                  <img src={icon} alt={task.status} className="w-5 h-5" />
                ) : (
                  <div className="w-5 h-5" />
                )}
                <span className="text-gray-700">{task.date}</span>
              </div>
              <p className="text-gray-700 text-sm">{task.text}</p>
              <div className="flex justify-end">
                <button className="text-gray-400 hover:text-gray-600">
                  <FiEdit2 />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-6">
        <button className="text-sm px-4 py-2 rounded-full bg-white hover:bg-gray-100">
          Load More
        </button>
      </div>
    </div>
  );
}
