import React, { Component } from 'react'
import FA from 'react-fontawesome'
import '../style/Navigation.sass'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable className="navigation">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/"><span>Coding Style Koolog </span>
            <FA
              name='book'
            />
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto nav navbar-right" navbar>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
