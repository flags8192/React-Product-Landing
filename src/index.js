import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ReactGA from 'react-ga'
import {BrowserRouter} from 'react-router-dom'

ReactGA.initialize('UA-187513238-2', {
  // debug: true,
  titleCase: false,
  gaOptions: {
    userId: 123
  }
})
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
