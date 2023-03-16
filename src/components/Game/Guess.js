import { range } from "../../utils";
import { checkGuess } from '../../game-helpers';

const Guess = ({ guess, answer }) => {
    const cols = range(0, 5)
    const guessStatuses = checkGuess(guess, answer)

    return (
        <p
            className='guess'>
            {
                cols.map(i => {
                    const guessStatus = guessStatuses ? guessStatuses[i].status : ''

                    return (
                        <span
                            key={i}
                            className={`cell ${guessStatus}`}>
                            {guess && guess[i]}
                        </span>
                    )
                })
            }
        </p>
    )
}

export default Guess;