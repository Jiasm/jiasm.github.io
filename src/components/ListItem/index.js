/* powered by jarvis */

import React, {Component} from 'react'
import {item, itemButton} from './index.css'

class ListItem extends Component {
  render () {
    var {title, postDate, index} = this.props
    // console.log(index, (index + 1) / 2 | 0, index % 2)
    var rotate = Math.PI / 180
    var width = 220
    var height = 310
    var x = (window.screen.availWidth - width) / 2
    var y = (window.screen.availHeight - window.screen.availTop - height) / 2
    var step = (index + 1) / 2 | 0
    var isLeft = !!(index % 2)
    // console.log((index ? (isLeft ? step : -step) : 0))
    var styleConf = {
      translate: {
        x: x + (index ? ((window.screen.availWidth - width) / 8 * (isLeft ? step : -step)) : index),
        y: y + (index ? ((window.screen.availHeight - window.screen.availTop - height) / 22 * step) : index),
        z: 0
      },
      rotate: (index ? (isLeft ? step : -step) * 10 : 0),
      scale: 1 - (step * 6) / 100,
      zIndex: 100 - step * 10,
      backgroundColor: 'rgb(74, 66, 173)'
    }
    // console.log(styleConf.translate.x)
    // var styleConf = {
    //   'transform': 'translate3d(351.724px, 278.672px, 0px) rotate(350deg) scale(0.94)',
    //   'z-index': '90',
    //   'background-color': 'rgb(217, 64, 52)'
    // }
    var style = {
      transform: `translate3d(${styleConf.translate.x}px, ${styleConf.translate.y}px, ${styleConf.translate.z}px) rotate(${styleConf.rotate}deg) scale(${styleConf.scale})`, // 'translate3d(508px, 265px, 0px) rotate(360deg) scale(1)',
      zIndex: styleConf.zIndex,
      backgroundColor: styleConf.backgroundColor
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
