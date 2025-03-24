// Sidebar.jsx
import React from "react";
import { PiBriefcase } from "react-icons/pi";

import {
  FiGrid,
  FiBriefcase,
  FiUsers,
  FiList,
  FiCalendar,
  FiPhoneCall,
  FiSettings,
  FiBell,
} from "react-icons/fi";

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: "dashboard", icon: <FiGrid />, tooltip: "Dashboard" },
    { id: "deals", icon: <PiBriefcase />, tooltip: "Deals" },
    { id: "customers", icon: <FiUsers />, tooltip: "Customers" },
    { id: "tasks", icon: <FiList />, tooltip: "Tasks" },
    { id: "calendar", icon: <FiCalendar />, tooltip: "Calendar" },
    { id: "navegaiton", icon: <FiBell  />, tooltip: "FiBell " },
    { id: "settings", icon: <FiSettings />, tooltip: "Settings" },
  ];

  return (
    <div className="md:w-20 w-16   h-screen flex flex-col items-center py-4 px-1 ml-1 sm:px-4">
      
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActivePage(item.id)}
          className={`md:w-12 md:h-12  w-10 h-10 mb-4 flex items-center justify-center rounded-full aspect-square transition-all duration-200 ${
            activePage === item.id
              ? "bg-[#514EF3] text-white shadow-md"
              : "bg-white text-[#7E92A2] shadow-sm"
          }`}
          title={item.tooltip}
        >
          <span className="text-xl">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
