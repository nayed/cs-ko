import React, { Component } from 'react'
import '../sass/App.sass'
import Navigation from './Navigation'
import Search from './Search'

const language = [
  {
    objectID: 1,
    name: "PHP",
    icone: ''
  },
  {
    objectID: 2,
    name: "Javascript",
    icone: ''
  }
]


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language,
      searchTerm: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    // const isSearched = (searchTerm) => (item) =>
    //   !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())
    // const { searchTerm, language } = this.state
    // return (
    //   <div className="App">
    //     <form>
    //       <input type="text" value={searchTerm} onChange={this.onSearchChange} />
    //     </form>
    //     { language.filter(isSearched(searchTerm)).map(item =>
    //       <div key={item.objectID}>
    //         <span>{item.name}</span>
    //       </div>
    //     )}
    //   </div>
    // )
    return (
      <div>
        <Navigation />
        <div className="container">
          <Search />
        </div>
      </div>
    )
  }
}

export default App
