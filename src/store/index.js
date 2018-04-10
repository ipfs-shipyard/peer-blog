import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../redux/reducers'

const middleware = [thunk, createLogger()]
const enhancers = []

export default (initialState = {}) =>
  createStore(
    rootReducer,
    initialState || {},
    compose(applyMiddleware(...middleware), ...enhancers)
  )
