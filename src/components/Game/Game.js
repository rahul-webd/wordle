import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from './Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = useState([])
  const [correctlyGuessed, setCorrectlyGuessed] = useState(false)
  const gameOver = (guessResults.length === NUM_OF_GUESSES_ALLOWED) || correctlyGuessed

  const addGuess = (guess) => {
    setGuessResults(prev => [
      ...prev,
      guess
    ])

    if (guess === answer) {
      setCorrectlyGuessed(true)
    }
  }

  return (
    <div>
      <GuessResults
        guessResults={guessResults}
        answer={answer} />
      <GuessInput
        onSubmit={addGuess}
        disabled={gameOver} />
      {
        gameOver
          && (
            <Banner
              variant={correctlyGuessed ? 'happy' : 'sad'}>
              {
                correctlyGuessed
                  ? (
                    <p>
                      <strong>Congratulations!</strong> Got it in 
                      {' '}<strong>{guessResults.length} {guessResults.length === 1 ? 'guess' : 'guesses'}</strong>
                    </p>
                  )
                  : (
                    <p>
                      Sorry, the correct answer is <strong>{answer}</strong>
                    </p>
                  )
              }
            </Banner>
          )
      }
    </div>
  );
}

export default Game;
