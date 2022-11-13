import React, { useState } from "react";

import "./App.css";

import { Board } from "./components/Board/index";

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
    checkWinner(updatedBoard);

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
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default App;
