/* powered by jarvis */

import React, { Component } from 'react'
import ListItem from '../ListItem'
import style from './index.css'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blogList: [],
      listLength: 0
    }
  }
  render () {
    let { blogList } = this.state

    return (
      <ul>
      {
        blogList.map((item, index) => <ListItem index={index}key={index} {...item}/>)
      }
      </ul>
    )
  }
  componentWillMount () {
    this.props.getData(list => {
      this.setState({
        blogList: this.state.blogList.concat(list)
      })
    })
  }
}

export default List
