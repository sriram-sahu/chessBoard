import React from "react";
import "./App.css";

const Chessboard = () => {
  const board = [];
  const positions = [
    "RKBQKBKR",
    "PPPPPPPP",
    "        ",
    "        ",
    "        ",
    "        ",
    "PPPPPPPP",
    "RNBQKBNR",
  ];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareColor = (row + col) % 2 === 0 ? "white" : "black";
      const piece = positions[row][col];

      board.push(
        <div key={`${row}${col}`} className={`square ${squareColor}`}>
          {piece}
        </div>
      );
    }
  }

  return (
    <div className='app'>
      <h1>Chess Board</h1>
      <div className='board'>{board}</div>
    </div>
  );
};

export default Chessboard;
