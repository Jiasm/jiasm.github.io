import React from 'react'
import {render} from 'react-dom'
import Header from '../components/Header'
import List from '../components/List'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

var getBlogList = (cb) => {
  $.ajax({
    url: 'feed/index.js',
    success: function (result) {
      cb(result.data)
    },
    dataType: 'json'
  })
}

var getLayout = () => ({children}) => (
  <div>
    <Header />
    <List getData={getBlogList} />
    {children}
  </div>
)

render((
  <Router history={hashHistory}>
    <Route path='/' component={getLayout()} />
  </Router>
  ), document.getElementById('root')
)
