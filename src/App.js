import React, { useState, useRef } from "react";
import { cx } from "@emotion/css";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(new Array(9).fill());
  const [squaresStatus, setSquaresStatus] = useState(new Set());
  const [color, setColor] = useState(true);
  const currentColoredIndex = 0;

  let arraySquares = Array.from(squaresStatus);

  const boxRef = useRef(null);

  console.log(squaresStatus);

  const squaresColorDecolor = (event, index) => {
    console.log(index);
    if (color === false && squaresStatus.size >= 0) {
      squares[index] = "decolor";
      arraySquares.shift();
    }
    console.log(arraySquares);

    if (squaresStatus.size === 9 && color === true) {
      console.log("all boxes are colored");
      setColor(false);
    } else {
      const currentSqaureStatus = squaresStatus;
      currentSqaureStatus.add(index);
      event.target.style.backgroundColor = "red";
      // event.target.backgroundColor = "red";
      setSquaresStatus(currentSqaureStatus);
    }
  };

  return (
    <div className="App">
      <h1>This is a react project for color box</h1>
      <div className="square-class">
        {squares.map((sqaure, index) => (
          <div
            onClick={(event) => squaresColorDecolor(event, index)}
            className={cx("sqaure-box", {
              [sqaure === "decolor"]: "bgNone",
            })}
            ref={boxRef}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
