/* powered by jarvis */

import React, {Component} from 'react'
import {blog, thread} from './index.css'

class Blog extends Component {
  render () {
    let {id, title, content} = this.props
    return (
      <article className={blog}>
        <div dangerouslySetInnerHTML={{__html: parseString(content)}} />
        <section className={thread + ' ds-thread'} id={"jarvis-comments"} data-thread-key={id} data-title={title} data-url={"jiasm.github.io"} />
      </article>
    )
  }
  componentDidMount () {
    window.Prism.highlightAll()
    window.DUOSHUO.init()
  }
}

function parseString (str) {
  return str.replace(/\\([^ts])?/g, function (_, $1) { return $1 ? ($1 === 'n' ? '\n' : $1) : _ })
}

export default Blog
