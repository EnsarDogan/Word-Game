import React from "react";
import { range } from "../../utils";

function Guess({ guessList }) {
  return (
    <div class="guess-results">
      {range(6).map((item) => {
        return (
          <p class="guess">
            {guessList[item]
              ? guessList[item].map(({ letter, status }) => (
                  <span class={`cell ${status}`}>{letter}</span>
                ))
              : range(5).map((cell) => <span class="cell"></span>)}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
