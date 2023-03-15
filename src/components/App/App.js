import Game from "../Game";
import Header from "../Header";
import Form from "../Form";
import { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Result from "../Result/Result";

const answer = sample(WORDS);
function App() {
  const [guess, setGuess] = useState("");
  const [guessList, setGuessList] = useState([]);
  let lastGuess;
  if (guessList.length) {
    lastGuess = guessList[guessList.length - 1];
  }
  const correctGuess =
    lastGuess && lastGuess.every(({ status }) => status === "correct");
  console.log(correctGuess);
  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <Game guessList={guessList} guess={guess} />
        {correctGuess ? (
          <Result guessList={guessList} result="win" />
        ) : guessList.length === 6 ? (
          <Result result="lost" answer={answer} />
        ) : (
          <Form
            guess={guess}
            answer={answer}
            setGuess={setGuess}
            guessList={guessList}
            setGuessList={setGuessList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
