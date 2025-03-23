import React from 'react'
import {  FiChevronDown, FiFilter } from "react-icons/fi";

function TableHeader({tittel}) {
  return (


<div className="flex flex-col md:flex-row md:items-center md:justify-between  px-1 lg:px-6 gap-3 mb-4">
        <p className="text-sm font-bold">Total: 23 {tittel}</p>
        <div className="flex items-center gap-2">
          <button className="flex items-center text-sm px-4 py-3 lg:px-8 lg:py-4 rounded-full bg-white">
            Sort by: Date Created <FiChevronDown className="ml-1" />
          </button>
          <button className="flex items-center gap-1 text-sm py-3 px-6 lg:py-4 rounded-full bg-white">
          Filter <FiFilter />    
          </button>
        </div>
      </div>
    
  )
}

export default TableHeader