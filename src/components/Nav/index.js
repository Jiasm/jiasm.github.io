/* powered by jarvis */

import React, {Component} from 'react'
import {wrap, focusWrap, btn, line, nav, itemWrap, active, mask, listWrap, navTitle} from './index.css'
import {Link} from 'react-router'
import Footer from '../Footer'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = this.state || {}
  }
  render () {
    let {title, navList} = this.props
    let style = this.state.focus ? focusWrap : wrap
    return (
      <div className={style}>
        <div onClick={this.clickHandler.bind(this)} className={btn}>
          <span className={line}></span>
          <span className={line}></span>
          <span className={line}></span>
        </div>
        <nav className={nav}>
          <h2 className={navTitle}>
            {title}
          </h2>
          <ul className={listWrap}>
            {
              navList.map((item, index) => (
                <li className={itemWrap} key={index}>
                  {item.href ? (
                    <a href={item.href}>
                      {item.text}
                    </a>
                  ) : (
                    <Link activeClassName={active} to={item.link} onClick={this.clickHandler.bind(this)}>
                      {item.text}
                    </Link>
                  )}
                </li>
              ))
            }
          </ul>
          <Footer absolute={true}/>
        </nav>
        <div onClick={this.clickHandler.bind(this)} className={mask}></div>
      </div>
    )
  }

  clickHandler () {
    if (!this.state.focus) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
    this.setState({
      focus: !this.state.focus
    })
  }
}

export default Nav
