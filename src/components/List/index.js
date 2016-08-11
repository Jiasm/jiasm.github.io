/* powered by jarvis */

import React, { Component } from 'react'
import ListItem from '../ListItem'
import {warp} from './index.css'

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
      <ul className={warp}>
      {
        blogList.map((item, index) => <ListItem index={index} key={index} {...item}/>)
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
  componentDidUpdate () {
    window.DUOSHUO.init()
  }
}

export default List
