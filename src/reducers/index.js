import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import conversation from './conversation'

export default (history) => combineReducers({
  router: connectRouter(history),
  conversation
})

// configureStore.js
