import React, { Component } from 'react'
import '../sass/App.sass'
import Navigation from './Navigation'
import Search from './Search'

class App extends Component {

  render() {
    // const isSearched = (searchTerm) => (item) =>
    //   !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())
    // const { searchTerm, language } = this.state
    // return (
    //   <div className="App">
    //
    //   </div>
    // )
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
