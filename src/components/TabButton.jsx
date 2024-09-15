import React from "react";

export const TabButton = ({children, onMyClick }) => {
  
  return (
    <li>
      <button onClick={onMyClick}  className="btn bg-pink-800 text-slate-200">
        {children}
      </button>
    </li>
  );
};
