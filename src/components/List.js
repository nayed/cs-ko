import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Collapse } from 'reactstrap'

import languages from "../db.json"

import '../style/List.sass'

import js from '../svg/js.svg'
import php from '../svg/php.svg'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      languages
    }

    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse })
  }

  render() {

    /**
    * Search terms in the languages by name
    */
    const isSearched = (searchTerm) => (item) =>
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())

    /**
    * sort languages object by name by comparing them
    */
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

    const { searchTerm } = this.props

    /**
    * Push svg file in the right languages object
    */
    const pushSvg = () => {
      const svgFile = [js, php]
      languages.map(language => {
        return svgFile.map(file => {
          return file.includes(language.icone.toLowerCase()) ? language["icone"] = file : ''
        })
      })
    }

    pushSvg()

    return (
      <div>
        <ListGroup>
          { languages.sort(sortByName).filter(isSearched(searchTerm)).map(item =>
            <ListGroupItem onClick={this.toggle} key={item.objectID} className="justify-content-between">
              <a href="#">
                <span className="languages"><img src={item.icone} alt={item.name} /> {item.name}</span>
              </a>
              <Collapse isOpen={this.state.collapse}>
                <ul>
                  <li>Blablabla</li>
                </ul>
              </Collapse>
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
    )
  }
}

export default List
