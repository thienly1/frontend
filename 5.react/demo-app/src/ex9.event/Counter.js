import React, { useState } from 'react';

const Counter = () => {

    const intitialCounterValue= 0;

    const [counter, setCounter] = useState(intitialCounterValue);

    const incrementHandler = () =>{
        console.log("Increment has been executed!");
        setCounter(counter +1);
    }
    const decrementHandler = () => {
        console.log("Decrement has been executed!");
        setCounter(counter -1);  
    }

    const resetHandler = () => {
        console.log("Reset has been executed!");
        setCounter(intitialCounterValue);  
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button type='button' className='btn btn-success' onClick={incrementHandler}>Increment</button>
            <button type='button' className='btn btn-danger' onClick={decrementHandler}>Decrement</button>
            <button type='button' className='btn btn-warning' onClick={resetHandler}>Reset</button>
        </div>
    );
};

export default Counter;