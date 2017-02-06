import React, { Component } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'

import List from './List'

import '../style/Search.sass'

import js from '../svg/js.svg'
import php from '../svg/php.svg'

const language = [
  {
    objectID: 1,
    name: "PHP",
    icone: php
  },
  {
    objectID: 2,
    name: "Javascript",
    icone: js
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
    const { searchTerm, language } = this.state

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
          language={language}
          searchTerm={searchTerm}
        />
      </div>
    )
  }
}

export default Search
