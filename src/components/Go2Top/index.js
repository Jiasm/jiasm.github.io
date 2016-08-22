/* powered by jarvis */

import React, {Component} from 'react'
import {go2top, hide} from './index.css'

class Go2Top extends Component {
  constructor (props) {
    super(props)
    let height = window.screen.availHeight
    let defaultKey = 'hide'
    this.scrollHandler = () => {
      let key
      if (window.scrollY >= height) {
        key = 'show'
      } else {
        key = defaultKey
      }
      this.setState({
        visible: key
      })
    }
    this.state = {
      visible: defaultKey
    }
  }
  render () {
    return (
      <div onClick={this.clickHandler} className={this.state.visible === 'show' ? go2top : hide} />
    )
  }

  clickHandler () {
    window.scrollTo(0, 0)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}

export default Go2Top
