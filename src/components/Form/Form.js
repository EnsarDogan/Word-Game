import React from "react";
import { checkGuess } from "../../game-helpers";
function Form({ guess, setGuess, guessList, setGuessList, answer }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guessList.length >= 6) {
      return;
    } else {
      const result = checkGuess(guess, answer);
      setGuessList([...guessList, result]);
    }

    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\S.{3,}\S"
        maxLength="5"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Form;
