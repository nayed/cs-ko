import React, { Component } from 'react'

import '../style/Content.scss'

class Content extends Component {
  render() {
    const { value } = this.props

    return (
      <div className="content">
        { value &&
          <div>
            <h3>{Object.keys(value)}</h3>
            <p>{Object.values(value)}</p>
          </div>
        }
      </div>
    )
  }
}

export default Content
