import React from "react";
import { Link } from 'react-router-dom'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./header.css";
class Header extends React.Component {
  state = {
    isOpen: true
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar className="NavBar navbar-dark"  color="aqua-gradient" dark expand="md">
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3 " isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavbarBrand>
              <MDBNavLink to="/">
                <strong className="black-text Aquaria-text-logo">Aquaria</strong>
              </MDBNavLink>
            </MDBNavbarBrand>

            <MDBNavItem>
              <MDBNavLink to="/shop">Shop</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contactus">Contact Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/checkout">Checkout</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/cart">Cart</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink to="/card">Pricing</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Categories</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default navbar-dropdown">
                  <MDBDropdownItem href="#!" className="navbar-dropdown-options">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Header;
