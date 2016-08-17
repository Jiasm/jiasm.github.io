import React from 'react'
import {render} from 'react-dom'
import Layout from '../components/Layout'
import LazyLayout from '../components/LazyLayout'
import Header from '../components/Header'
import Content from '../components/Content'
import List from '../components/List'
import Blog from '../components/Blog'
import Loading from '../components/Loading'
import Footer from '../components/Footer'
import { hashHistory, Router, Route } from 'react-router'

var changeTitle = str => {
  document.title = str || '首页'
}

var staticConfig = {
  title: 'Jarvis'
}

var navList = [
  {
    text: '首页',
    link: '/'
  }, {
    text: '分类',
    link: '/'
  }, {
    text: 'GitHub',
    href: 'https://github.com/jiasm'
  }
]

var getBlogList = (cb) => {
  $.ajax({
    url: 'feed/index.js',
    success: function (result) {
      changeTitle()
      cb(result.data.reverse())
    },
    dataType: 'json'
  })
}

var getBlogContent = (id) => (cb) => {
  $.ajax({
    url: `feed/${id}.js`,
    success: function (result) {
      changeTitle(result.title)
      cb(
        <Layout>
          <Header text={result.title} navList={navList} navTitle={staticConfig.title}/>
          <Content>
            <Blog {...result}/>
          </Content>
          <Footer />
        </Layout>
      )
    },
    dataType: 'json'
  })
}

var ListLayout = () => (
  <Layout>
    <Header text={staticConfig.title} navList={navList}/>
    <Content>
      <List getData={getBlogList}/>
    </Content>
    <Loading />
    <Footer />
  </Layout>
)

var BlogLayout = ({params: {id}}) => {
  return (
    <LazyLayout loadData={getBlogContent(id)} >
      <Header text={staticConfig.title} navList={navList} navTitle={staticConfig.title}/>
      <Content>
        <Loading visible={true} />
      </Content>
      <Footer />
    </LazyLayout>
  )
}
window.addEventListener('load', function () {
  render((
    <Router history={hashHistory}>
      <Route path='/' component={ListLayout} />
      <Route path='/blog/:id' component={BlogLayout} />
    </Router>
    ), document.getElementById('root')
  )
})
