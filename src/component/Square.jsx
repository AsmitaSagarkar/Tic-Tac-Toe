import { useState } from "react";

export default function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);

  // function handleClick() {
  //   // console.log("clicked!")
  //   setValue("X");
  // }
  return (
    <button
      className="square"
      // onClick={handleClick}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
