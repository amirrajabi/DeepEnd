/**
 * Created by Amir on 27/09/2016.
 */

import React from 'react';
import $ from "jquery";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {},
      url: './../../data/cart.json'
    };
  }
  componentDidMount() {
    this.loadCartFromServer();
  }

  loadCartFromServer() {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (err) {
        console.error(err.toString());
      }.bind(this)
    });
  }

  render() {
    return (

      <div className="header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Toggle />
            <Navbar.Brand>
              <a href="#"
                 className="header__logo">
                <img src="http://placehold.it/215x50" alt="LOGO"/>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse className="pull-left">
            <Nav>
              <NavItem eventKey={1} href="#">homepage</NavItem>
              <NavItem eventKey={2} href="#">shop</NavItem>
              <NavItem eventKey={2} href="#">shortcodes</NavItem>
              <NavDropdown eventKey={3} title="pages" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>theme features</MenuItem>
                <MenuItem eventKey={3.2}>portfolio</MenuItem>
                <MenuItem eventKey={3.3}>about us</MenuItem>
              </NavDropdown>
              <NavItem eventKey={4} href="#">buy</NavItem>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar__right pull-right">
            <a href="#"
               className="account hidden-xs">my account</a>
            <a href="#"
               className="cart"><span className="hidden-xs">cart /</span><span className="total">${this.state.data.total}</span></a>
            <span className="glyphicon glyphicon-shopping-cart">{this.state.data.items}</span>
          </div>
        </Navbar>

      </div>

    );
  }

}

export default Header;
