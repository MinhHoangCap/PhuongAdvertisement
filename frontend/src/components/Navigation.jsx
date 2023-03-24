import React, { Component } from 'react'
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"

import "../css/Navigation.css"
export default class Navigation extends Component {
  render() {
    return (
      <div>
   

          <Navbar variant='dark'>
              <Container>

                  <Navbar.Brand href='/home'>Navbar</Navbar.Brand>
                  <Nav defaultActiveKey="/home" >
                      <Nav.Link href="/home">Active</Nav.Link>
                      <Nav.Link href="link-1">Link</Nav.Link>
                      <Nav.Link eventKey="link-2">Link</Nav.Link>
                      <Nav.Link eventKey="disabled" disabled>
                          Disabled
                      </Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
       
      </div>
    )
  }
}
