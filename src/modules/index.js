import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import brain from './brain'

export default combineReducers({
  routing: routerReducer,
  brain
})