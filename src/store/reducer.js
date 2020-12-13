import {INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT, RESET} from './actions';

const initialState = {
  counter: 0
}


export const counterReducer = (state = initialState, action)=>{
  switch (action.type){
    case INCREMENT:{
      return {
        ...state, counter: state.counter + 1
      }
    }
    case DECREMENT:{
      return {
        ...state, counter: state.counter - 1
      }
    }
    case RESET:{
      return {
        ...state, counter: 0
      }
    }
    case INCREMENT_BY_AMOUNT:{
      return {
        ...state, counter: state.counter + action.payload
      }
    }
    default:{
      return state
    }


  }
}