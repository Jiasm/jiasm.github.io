/* powered by jarvis */

import React, {Component} from 'react'
import {layout} from './index.css'

class LazyLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      children: this.props.children
    }
  }
  render () {
    let {children} = this.state
    return (
      <div className={layout}>
        {children}
      </div>
    )
  }
  componentDidMount () {
    var {loadData} = this.props
    loadData(children => {
      this.setState({
        children: children
      })
    })
  }
}

export default LazyLayout
