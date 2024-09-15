import React from "react";

export const TabButton = ({children, onMyClick, isSelected }) => {
  
  return (
    <li>
      <button onClick={onMyClick}  className={isSelected ? 'active' : ''}>
        {children}
      </button>
    </li>
  );
};
