import React, { Component } from 'react'
import Navigation from './Navigation'
import Search from './Search'

import '../style/App.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <Search />
        </div>
      </div>
    )
  }
}

export default App
