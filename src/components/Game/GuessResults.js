import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "./Guess";

const GuessResults = ({ guessResults, answer }) => {
    const rows = range(0, NUM_OF_GUESSES_ALLOWED)

    return (
        <div
            className="guess-results">
            {
                rows.map(i => (
                    <Guess
                        key={i}
                        guess={guessResults[i]}
                        answer={answer} />
                ))
            }
        </div>
    )
}

export default GuessResults;