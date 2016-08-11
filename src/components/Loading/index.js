/* powered by jarvis */

import React, {Component} from 'react'
import {loading} from './index.css'

class Loading extends Component {
  render () {
    let {visible} = this.props
    let style = {
      display: visible ? 'block' : 'none'
    }
    return (
      <div className={loading} style={style}></div>
    )
  }
}

export default Loading
