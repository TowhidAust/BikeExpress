import React, { useState } from 'react';
import {RiMotorbikeLine} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
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
import Logo from '../logo/logo';

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="top-nav-root">
      <Navbar className="top-nav-container container" dark expand="md">
        <NavbarBrand className="d-flex flex-row align-items-center" href="/"> 
        {/* <div className="top-nav-logo-name">
          Bike <div className="bike-logo"><RiMotorbikeLine/></div> Hub 
        </div> */}
        <Logo/>
         </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="/components/">SELL</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">BUY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">BUY AT HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">SELL YOUR BIKE AND BUY NEW BIKE</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="text-white" nav caret>
                OPTIONS
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
          <NavbarText>
            <NavLink className="text-white d-flex flex-row align-items-center" href="/signup">
              <AiOutlineUser/> 
              <div className="top-nav-login-text">LOGIN</div>
            </NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;