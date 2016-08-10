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
    <List getData={getBlogList} tw={200} th={300} ty={100} gap={12} radius={600} />
    {children}
  </div>
)

render((
  <Router history={hashHistory}>
    <Route path='/' component={getLayout()} />
  </Router>
  ), document.getElementById('root')
)
