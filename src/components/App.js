import React, { Component } from 'react'
import '../style/App.sass'
import Navigation from './Navigation'
import Search from './Search'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <Search />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
