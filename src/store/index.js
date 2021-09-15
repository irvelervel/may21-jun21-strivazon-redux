import { createStore } from 'redux'
import mainReducer from '../reducers'

// 3 arguments for createStore:
// 1) primary reducer
// 2) initial state of the app
// 3) middlewares/plugins

export const initialState = {
  cart: {
    products: [],
  },
  user: {
    firstName: '',
  },
}

const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
