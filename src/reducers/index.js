import { initialState } from '../store'

// we want to restore the featureset we had at the end of monday morning:
// - be able to add items to the cart -> 'ADD_ITEM_TO_CART'
// - be able to remove an item from the cart -> 'REMOVE_ITEM_FROM_CART'
// - be able to set the username -> 'SET_USERNAME'

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //   case 'ADD_ITEM_TO_CART'
    //   case 'REMOVE_ITEM_FROM_CART'
    //   case 'SET_USERNAME'
    default:
      return state
  }
}

export default mainReducer
