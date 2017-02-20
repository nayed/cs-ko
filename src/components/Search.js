import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'

import List from './List'

import '../style/Search.scss'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    const { searchTerm } = this.state

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

        <List
          searchTerm={searchTerm}
        />
      </div>
    )
  }
}

export default Search
