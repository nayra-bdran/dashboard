import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import usePageStore from "../zustand/usePageStore";
import { assets } from "../assets/assets";
import Button from "./Button";
import AddNewMenu from "./AddNewMenu";
import { useNavigate } from "react-router-dom";

function Header() {
  const { pageTitle } = usePageStore();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setShowMenu(false); 
  };

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4 px-4 py-3 lg:px-6 lg:py-4">
        <div className="flex items-center gap-3">
          <img src={assets.Logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="text-base sm:text-lg font-semibold text-[#1a2e46]">
            {pageTitle}
          </h1>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Button onClick={() => setShowMenu(true)} />

          {/* Search */}
          <button className="bg-white p-2 rounded-full shadow text-gray-600 hover:text-black">
            <FiSearch className="w-4 h-4" />
          </button>

          {/* Profile */}
          <img
            src={assets.Image}
            alt="Profile"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Show modal */}
      {showMenu && (
        <AddNewMenu onClose={() => setShowMenu(false)} navigateTo={handleNavigate} />
      )}
    </>
  );
}

export default Header;
