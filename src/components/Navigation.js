import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

class Navigation extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#">CS-KO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    )
  }
}

export default Navigation
