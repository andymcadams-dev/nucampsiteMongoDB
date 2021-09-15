import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, 
  NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Label, Input, Container, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
      super(props);
      this.toggleNav=this.toggleNav.bind(this);
      this.state = {
        isNavOpen: false,
        isModalOpen: false
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col xs={4}>
                <img src="../assets/images/CanWeListen.png" alt="logo" height="150" width="300"/>
              </Col>
              <Col xs={4}>
                <h1>Can We Listen</h1>
                <h2>Description</h2>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
          <Navbar dark sticky="top" expand="md">
              <div className="container">
                  <NavbarBrand className="mr-auto" href="/"><img src="../assets/images/CanWeListen.png'"
                  height="90" width="120" alt="CWL Logo" /></NavbarBrand>
                  <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar>
                          <NavItem>
                              <NavLink className="nav-link" to="/home">
                                  <i className="fa fa-home fa-lg" /> Home
                              </NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/account">
                                  <i className="fa fa-list fa-lg" /> Account
                              </NavLink>
                          </NavItem>
                          <NavItem>
                          <NavLink className="nav-link" to="/map">
                              <i className="fa fa-info fa-lg" /> Map
                          </NavLink>
                      </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/contact">
                                  <i className="fa fa-info fa-lg" /> Contact
                              </NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </div>
          </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;