import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

import Links from './Links'
import './Navbar.css'

function GwizzlyNav() {

    return (
    <Navbar expand="lg">
      <Container>

        <Navbar.Brand className="logo" href="#home">GWIZZLY</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav">
          <Links/>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    )
}

export default GwizzlyNav;