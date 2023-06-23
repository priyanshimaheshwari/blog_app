"use Client"


import { ThemeContext } from '@/src/context/ThemeContext';
import React from 'react'
import { useContext } from 'react';


const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className="w-11 h-7 border-2 border-solid border-[#53c28b70] rounded-3xl flex items-center justify-between p-2 relative cursor-pointer " onClick={toggle}>
      <div className="text-xs">🌙</div>
      <div className="text-xs">🔆</div>
      <div
        className="w-4 h-4 bg-[#53c28b] rounded-full absolute"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
