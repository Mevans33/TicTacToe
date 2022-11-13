import React from "react";

import "./index.css";

export const ScoreBoard = ({ score, xPlayerPlaying }) => {
  const { xScore, oScore } = score;
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlayerPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlayerPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
};
