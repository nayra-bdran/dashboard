import React from "react";
import { FiUser, FiBriefcase, FiArrowRight, FiX } from "react-icons/fi";

const AddNewMenu = ({ onClose, navigateTo }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-[400px]  rounded-xl p-4 space-y-4 shadow-xl relative">
        <button
          className="absolute top-2 right-2 text-[#7E92A2] hover:text-gray-800"
          onClick={onClose}
        >
          <FiX />
        </button>

        <h3 className="text-sm font-semibold text-[#7E92A2]">Add New</h3>

        <button
          onClick={() => navigateTo("/deals/new")}
          className="flex items-center justify-between w-full text-sm text-[#092C4C] hover:bg-gray-100 px-3 py-2 rounded-lg"
        >
          <span className="flex items-center gap-2 ">
            <span className="text-[#7E92A2]">
              {" "}
              <FiBriefcase />
            </span>{" "}
            Deal
          </span>
          <FiArrowRight />
        </button>

        <button
          onClick={() => navigateTo("/customers/new")}
          className="flex items-center justify-between w-full text-sm text-[#092C4C] hover:bg-gray-100 px-3 py-2 rounded-lg"
        >
          <span className="flex items-center gap-2">
            <span className="text-[#7E92A2]">
              {" "}
              <FiUser />{" "}
            </span>
            Customer
          </span>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AddNewMenu;
