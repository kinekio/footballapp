import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './app/store'

render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)