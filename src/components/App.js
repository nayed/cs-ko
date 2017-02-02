import React, { Component } from 'react'
import '../sass/App.sass'

const list = [
  {
    objectID: 1,
    name: "PHP",
  },
  {
    objectID: 2,
    name: "Javascript",
  }
]


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list,
      searchTerm: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const isSearched = (searchTerm) => (item) =>
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const { searchTerm, list } = this.state
    return (
      <div className="App">
        <form>
          <input type="text" value={searchTerm} onChange={this.onSearchChange} />
        </form>
        { list.filter(isSearched(searchTerm)).map(item =>
          <div key={item.objectID}>
            <span>{item.name}</span>
          </div>
        )}
      </div>
    )
  }
}

export default App
