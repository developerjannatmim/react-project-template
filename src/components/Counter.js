import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter, resetCounter } from '../services/action/counterAction';

const Counter = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div className='counter'>
        <h1 className='text'>Counter App</h1>
        <h3 className='text'>Count: {count}</h3>
        <button onClick={handleIncrement} className='btn'>Increment</button>
        <button onClick={handleReset} className='btn'>reset</button>
        <button onClick={handleDecrement} className='btn'>Decrement</button>
        
    </div>
  )
}

export default Counter;