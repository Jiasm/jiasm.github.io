/* powered by jarvis */

import React, {Component} from 'react'
import {item, itemButton, itemTitle, itemDate, itemDs} from './index.css'

class ListItem extends Component {
  render () {
    var {title, postDate, id, index} = this.props
    return (
      <li className={item}>
        <div className={itemButton}>
          <span className={itemTitle}>
            <a href={`#/blog/${id}`}>
              {title}
            </a>
          </span>
          <time className={itemDate}>
            {postDate}
          </time>
          <span className={itemDs + ' ds-thread-count'} data-thread-key={id} data-count-type="comments"></span>
        </div>
      </li>
    )
  }
}

export default ListItem
