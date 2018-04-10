import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
import App from './App'
import mockData from './mockData'

const store = configureStore(mockData)

window.store = store

ReactDOM.render(<App store={store} />, document.getElementById('root'))
