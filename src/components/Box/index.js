import React from "react";

import "./index.css";

export const Box = ({ value, onClick }) => {
  // Change of colors for X and O
  const style = value === "X" ? "box x" : "box o";
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
