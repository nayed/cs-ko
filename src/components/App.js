import React, { Component } from 'react'
import Navigation from './Navigation'
import Search from './Search'

import '../style/App.sass'

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
              <section className="content text-center">
                Bienvenue sur CS-KO
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
