import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

import { data } from "../data.js"

import '../style/List.scss'

import js from '../svg/js.svg'
import php from '../svg/php.svg'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data
    }

    this.toggle = this.toggle.bind(this)
    this.state = { collapse: false }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse })
  }

  render() {
    /**
    * Search terms in data languages by name
    */
    const isSearched = (searchTerm) => (item) =>
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase())

    /**
    * sort data object by name by comparing them
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
    * Push svg file in the right data object
    */
    const pushSvg = () => {
      const svgFile = [js, php]
      data.map(language => {
        return svgFile.map(file => {
          return file.includes(language.icone.toLowerCase()) ? language["icone"] = file : ''
        })
      })
    }
    pushSvg()

    return (
      <div>
        <ListGroup>
          { data.sort(sortByName).filter(isSearched(searchTerm)).map(language =>
            <ListGroupItem onClick={this.toggle} key={language.objectID} className="justify-content-between">
              <details>
                <summary>
                  <span className="languages"><img src={language.icone} alt={language.name} /> {language.name}</span>
                </summary>
                { language.sections &&
                  <ul>
                      { language.sections.map(section =>
                      <li key={Object.keys(section)}>
                        <Button color="link">{ Object.keys(section) }</Button>
                      </li>
                      )}
                  </ul>
                }
              </details>
            </ListGroupItem>
          )}
        </ListGroup>
      </div>
    )
  }
}

export default List
