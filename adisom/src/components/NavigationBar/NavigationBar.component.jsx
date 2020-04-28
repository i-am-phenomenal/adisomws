import React, { useState } from 'react';
import {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return(
            <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler /> 
        <Collapse isOpen={true} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about_us/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/our_work/">Our Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact_us/">Contact Us</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/gallery/"> Gallery</NavLink>
                </NavItem> 
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Some more Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Reserved for Logo</NavbarText>
        </Collapse>
      </Navbar>
    </div>
        )
    }
}
