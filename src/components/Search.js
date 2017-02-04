import React, { Component } from 'react'
import { Form, FormGroup, Input, ListGroup, ListGroupItem, Badge } from 'reactstrap'

import '../style/Search.sass'

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

    return (
      <div>
        <Form>
          <FormGroup>
            <Input
              type="text"
              value={searchTerm}
              onChange={this.onSearchChange}
            />
          </FormGroup>
        </Form>
        
        <ListGroup>
          { language.sort(sortByName).filter(isSearched(searchTerm)).map(item =>
            <ListGroupItem key={item.objectID} className="justify-content-between">
              {item.name} <Badge pill>2</Badge>
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
    )
  }
}

export default Search
