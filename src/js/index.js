import React from 'react'
import {render} from 'react-dom'
import Header from '../components/Header'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

var getLayout = () => ({children}) => (
  <div>
    <Header />
    {children}
  </div>
)

render((
  <Router history={hashHistory}>
    <Route path='/' component={getLayout()} />
  </Router>
  ), document.getElementById('root')
)
