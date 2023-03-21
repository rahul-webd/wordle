import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from './Banner';

const getRandAnswer = () => sample(WORDS)

const defaultGuessResults = []
const defaultCorrectlyGuessed = false

function Game() {
  const [guessResults, setGuessResults] = useState(defaultGuessResults)
  const [answer, setAnswer] = useState(getRandAnswer())
  const [correctlyGuessed, setCorrectlyGuessed] = useState(defaultCorrectlyGuessed)
  const gameOver = (guessResults.length === NUM_OF_GUESSES_ALLOWED) || correctlyGuessed

  console.log(answer)

  const addGuess = (guess) => {
    setGuessResults(prev => [
      ...prev,
      guess
    ])

    if (guess === answer) {
      setCorrectlyGuessed(true)
    }
  }

  const restart = () => {
    setGuessResults(defaultGuessResults)
    setAnswer(getRandAnswer())
    setCorrectlyGuessed(defaultCorrectlyGuessed)
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
              <button
                onClick={restart}
                style={{
                  marginTop: '12px'
                }}>
                Restart
              </button>
            </Banner>
          )
      }
    </div>
  );
}

export default Game;
