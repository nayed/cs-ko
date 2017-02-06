import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import '../style/List.sass'

class List extends Component {
  render() {
    const isSearched = (searchTerm) => (item) =>
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())

    const sortByName = (a, b) => {
      let nameA = a.name.toLowerCase()
      let nameB = b.name.toLowerCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      // names must be equal
      return 0
    }

    const { searchTerm, language } = this.props

    return (
      <div>
        <ListGroup>
          { language.sort(sortByName).filter(isSearched(searchTerm)).map(item =>
            <ListGroupItem key={item.objectID} className="justify-content-between">
              <img src={item.icone} alt={item.name} /> {item.name}
            </ListGroupItem>
          )}
        </ListGroup>
        </div>
    )
  }
}

export default List
