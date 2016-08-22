/* powered by jarvis */

import React, {Component} from 'react'
import {forkMeWrapper, forkMe, forkMeLink, forkMeText} from './index.css'

class ForkMe extends Component {
  render () {
    return (
      <div className={forkMeWrapper}>
        <div className={forkMe}>
          <a className={forkMeLink} href="https://github.com/jiasm">
            <span className={forkMeText}>Fork Me On GitHub</span>
          </a>
        </div>
      </div>
    )
  }
}

export default ForkMe
