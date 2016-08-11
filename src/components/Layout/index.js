/* powered by jarvis */

import React, {Component} from 'react'
import {layout} from './index.css'

class Layout extends Component {
  render () {
    let {children} = this.props
    return (
      <div className={layout}>
        {children}
      </div>
    )
  }
}

export default Layout
