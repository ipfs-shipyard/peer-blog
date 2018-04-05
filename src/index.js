import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import App from './App'

const store = configureStore()

ReactDOM.render(<App store={store} />, document.getElementById('root'))
