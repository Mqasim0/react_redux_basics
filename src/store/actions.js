export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT"
export const RESET = "RESET"


export const increment = () => {
  return {
    type:INCREMENT
  }
}
export const decrement = () => {
  return {
    type:DECREMENT
  }
}
export const increment_by_amount = (Number) => {
  return {
    type:INCREMENT_BY_AMOUNT,
    payload: Number
  }
}
export const reset = () => {
  return {
    type: RESET
  }
}
