/* powered by jarvis */

import React, {Component} from 'react'
import {item, itemButton} from './index.css'

class ListItem extends Component {
  render () {
    var {title, postDate, index} = this.props
    var style = {
      'transform': 'translate3d(351.724px, 278.672px, 0px) rotate(350deg) scale(0.94)',
      'z-index': '90',
      'background-color': 'rgb(217, 64, 52)'
    }
    return (
      <div className={item} style={style}>
        <div className={itemButton}>
          {title} {postDate}
        </div>
      </div>
    )
  }
}

export default ListItem
