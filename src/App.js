import React, { useState } from "react";

import "./App.css";

import { Board } from "./components/Board/index";
import { ScoreBoard } from "./components/ScoreBoard";

function App() {
  // Define Win Conditions
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // array of 9 elements
  const [board, setBoard] = useState(Array(9).fill(null));

  // State of Player X, Player X always start game
  const [xPlayerPlaying, setXPlayerPlaying] = useState(true);

  const [score, setScore] = useState({ xScore: 0, oScore: 0 });

  // Determine which box clicked
  const handleBoxClick = (boxIndx) => {
    const updatedBoard = board.map((value, indx) => {
      if (indx === boxIndx) {
        return xPlayerPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    //Check winner after updated board
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      }
    }

    // Once board updated, update board variable
    setBoard(updatedBoard);

    // Switch Players
    setXPlayerPlaying(!xPlayerPlaying);
  };

  // Function to check winner
  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        return board[x];
      }
    }
  };

  return (
    <div className="App">
      <ScoreBoard score={score} xPlayerPlaying={xPlayerPlaying} />
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default App;
