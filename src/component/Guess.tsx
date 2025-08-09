import React, { useState } from 'react';
import './Guess.css';

const Guess = () => {
    const [num, setNum] = useState<string>(" ");
    const [show, setShow] = useState<string | null>(null);
    const myNum: number = 85;

    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum(e.target.value); 

    };

    const handleCheck = (): void => {
        const guess = Number(num); 

        if (guess > myNum) {
            setShow('This number is too high');
        } else if (guess < myNum) {
            setShow('This number is too low');
        } else {
            setShow('This number is correct');
        }
    };


    
    return (
        <div className="guess-container">
            <h2> Guess the Number!</h2>
            <div className="input-group">
                <input
                    type="number"
                    value={num}
                    onChange={handleNumber}
                    placeholder="Enter a number"
                />
                <button onClick={handleCheck}>Check</button>
            </div>
            {show && <p className={`result ${show === 'This number is correct' ? 'correct' : 'wrong'}`}> {show}</p>}
        </div>
    );
};

export default Guess;
