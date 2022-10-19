import {createStore} from 'redux'

let initialState = {
  // cart: [],
  total: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "GETTOTAL": 
      const total = action.payload
      .reduce((acc, prod) => {
        return acc + prod.product.price
      },0)
      return {...state, total: total}
    default:
      return state
  }
}
const store = createStore(reducer)

export default store