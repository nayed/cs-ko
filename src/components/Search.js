import React, { Component } from 'react'
import {  } from 'reactstrap'

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

class Search extends Component {
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
    const isSearched = (searchTerm) => (item) =>
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const { searchTerm, language } = this.state
    return (
      <div>
      <form>
        <input type="text" value={searchTerm} onChange={this.onSearchChange} />
      </form>
      { language.filter(isSearched(searchTerm)).map(item =>
        <ul key={item.objectID}>
          <li>{item.name}</li>
        </ul>
      )}
      </div>
    )
  }
}

export default Search
