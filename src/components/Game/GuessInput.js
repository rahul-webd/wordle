import { useState } from "react";

const defaultVal = ''

const GuessInput = ({ disabled, onSubmit }) => {
    const [value, setValue] = useState(defaultVal)

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                setValue(defaultVal)
                onSubmit(value)
            }}
            className="guess-input-wrapper">
            <label
                htmlFor="guess-input">
                Enter Guess:
            </label>
            <input
                id='guess-input'
                type='text'
                value={value}
                pattern={"[A-Z]{5}"}
                maxLength={5}
                required={true}
                disabled={disabled}
                onChange={e => setValue(e.target.value.toUpperCase())} />
        </form>
    )
}

export  default GuessInput;