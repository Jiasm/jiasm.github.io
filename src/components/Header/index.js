/* powered by jarvis */

import React, {Component} from 'react'
import style, { title} from './index.css'
import Nav from '../Nav'

class Header extends Component {
  constructor (props) {
    super(props)
    let defaultKey = this.defaultKey = 'header'
    this.state = {
      onScroll: this.defaultKey
    }
    this.scrollHandler = window.screen.availWidth < 480 ? e => {
      let key
      if (window.scrollY >= 20) {
        key = 'mobileHeader'
      } else {
        key = defaultKey
      }
      this.setState({
        headerKey: key
      })
    } : e => {
      let key
      if (window.scrollY >= 192) {
        key = 'scrollHeader'
      } else if (window.scrollY >= 80) {
        key = 'overHeader'
      } else {
        key = defaultKey
      }
      this.setState({
        headerKey: key
      })
    }
  }
  render () {
    let {text, navTitle, navList} = this.props
    return (
      <header className={style[this.state.headerKey || 'header']}>
          <Nav navList={navList} title={navTitle || text} />
          <span className={title}>
            {text}
          </span>
      </header>
    )
  }
  componentWillMount () {
    window.scrollTo(0, 0)
  }
  componentDidMount () {
    window.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}

export default Header
