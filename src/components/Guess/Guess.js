import React from "react";
import { range } from "../../utils";

function Guess({ guessList }) {
  return (
    <div className="guess-results">
      {range(6).map((item) => {
        return (
          <p className="guess">
            {guessList[item]
              ? guessList[item].map(({ letter, status }) => (
                  <span className={`cell ${status}`}>{letter}</span>
                ))
              : range(5).map((cell) => <span className="cell"></span>)}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
