import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, increment_by_amount, reset} from '../store/actions'

const Counter = () => {

  const [value, setValue] = useState('');
 
  const dispatch = useDispatch();
  const counter = useSelector((state)=>{
    return state.counter
  })

  const onChangeHandler = (e) => {
     setValue(e.target.value)
    
  }
  const onClickHandler = () => {
    dispatch(increment_by_amount(Number(value)))
    setValue('')
  }

  return (
    <div>
      <h1>Counter : {counter}</h1>

      <button onClick={()=> dispatch(increment()) }>
        Increment
      </button>
      <button onClick={()=> dispatch(decrement()) }>
        Decrement
      </button>
      <button onClick={()=> dispatch(reset()) }>
        Reset
      </button>
      <br/><br/>
      <input type="text" value={value}  onChange={onChangeHandler}/>
      <br/><br/>
      <button onClick={onClickHandler}>
        Increment By value
      </button>


    </div>
  )
}


export default Counter