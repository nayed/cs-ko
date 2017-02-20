import React, { Component } from 'react'
import Navigation from './Navigation'
import Search from './Search'
import Content from './Content'

import '../style/App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Search />
            </div>
            <div className="col-sm-8">
              <Content />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
