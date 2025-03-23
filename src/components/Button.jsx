import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ to, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); 
    } else if (to) {
      navigate(to); 
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#514EF3] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium flex items-center gap-1 sm:gap-2 whitespace-nowrap"
    >
      <span className="hidden sm:inline">Add New</span>
      <span className="text-base sm:text-lg">+</span>
    </button>
  );
}

export default Button;



