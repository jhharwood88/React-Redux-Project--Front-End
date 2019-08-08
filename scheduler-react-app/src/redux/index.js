import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import shifts from './reducers/shiftsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'; 

const rootReducer = combineReducers({
	shifts
})

export default createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
  ))