import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import post from './modules/post'

export default combineReducers({
  post,
  router
})
