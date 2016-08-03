/* powered by jarvis */

import React, {Component} from 'react'
import style from './index.css'

class ListItem extends Component {
  render () {
    var {title, postDate} = this.props
    return (
      <div>
        {title} {postDate}
      </div>
    )
  }
}

export default ListItem
