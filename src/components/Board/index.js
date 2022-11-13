import React from "react";

import { Box } from "../Box/index";

import "./index.css";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {/* iterate through list*/}
      {board.map((value, indx) => {
        return <Box value={value} onClick={() => onClick(indx)} />;
      })}
    </div>
  );
};
