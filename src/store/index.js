import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducers from '../reducers'

const middleware = [
  createLogger()
]

export default () => createStore(
  reducers,
  applyMiddleware(...middleware)
)