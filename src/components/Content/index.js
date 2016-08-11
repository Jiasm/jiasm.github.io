/* powered by jarvis */

import React, {Component} from 'react'
import {wrap} from './index.css'

class Content extends Component {
  render () {
    let {children} = this.props
    return (
      <main className={wrap}>
        {children}
      </main>
    )
  }
}

export default Content
