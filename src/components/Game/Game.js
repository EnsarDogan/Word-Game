import React from "react";
import Guess from "../Guess/Guess";

function Game({ guessList }) {
  return (
    <>
      <Guess guessList={guessList} />
    </>
  );
}

export default Game;
