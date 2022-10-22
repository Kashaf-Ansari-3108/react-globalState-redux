import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ButtonCmp from '../../components/Button';
import { AddCounter, SubCounter } from '../../store/Actions/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state.counterReducer);

  const addCounter = () => {
    dispatch(AddCounter());
  };

  const subCounter = () => {
   dispatch(SubCounter());
  };

  return (
    <>
    <h1>Counter</h1>
    <h1>{selector.counter}</h1>
    <div className='d-flex gap-3'>
    <ButtonCmp onClick={addCounter} value="+" variant="primary" />
    <ButtonCmp onClick={subCounter} value="-" variant="danger" />
    </div>
   
    </>
  )
}

export default Counter;