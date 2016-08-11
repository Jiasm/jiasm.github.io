/* powered by jarvis */

import React, {Component} from 'react'
import {wrap, staticWrap, desc} from './index.css'

class Footer extends Component {
  render () {
    let {absolute} = this.props

    return (
      <div className={absolute ? wrap : staticWrap}>
        <p>
          Powered by jarvis
        </p>
        <p className={desc}>
          技术=坚持+积累+学习+分享
        </p>
      </div>
    )
  }
}

export default Footer
