import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import languages from "../db.json"

import '../style/List.sass'

import js from '../svg/javascript.svg'
import php from '../svg/php.svg'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      languages,
    }
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
      languages.map(langue => {
        return svgFile.map(file => {
          return file.includes(langue.name.toLowerCase()) ? langue["icone"] = file : ''
        })
      })
    }

    pushSvg()

    return (
      <div>
        <ListGroup>
          { languages.sort(sortByName).filter(isSearched(searchTerm)).map(item =>
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
