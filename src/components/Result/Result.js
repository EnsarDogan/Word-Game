import React from "react";

function Result({ result, guessList, answer }) {
  const style = {
    background: result === "win" ? "green" : "red",
    padding: "2rem",
  };
  if (result === "win") {
    return (
      <div style={style}>
        Congratulations. Got it in {guessList.length} guesses.
      </div>
    );
  }
  if (result === "lost") {
    return <div style={style}>Sorry, the correct answer is {answer}.</div>;
  }
}

export default Result;
