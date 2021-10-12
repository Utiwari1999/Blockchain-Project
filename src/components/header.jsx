import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import { Container, Nav,Navbar } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const header = () => {
    return (
        <Navbar collapse bg="dark" variant="dark">
        <Container>
        <LinkContainer to="/">
            <Navbar.Brand href="#">Blockchain Project</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="mt-auto">
            <LinkContainer to="/hash">
                <Nav.Link href="/hash">Hash</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/block">
                <Nav.Link href="/block">Block</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blockchain">
                <Nav.Link href="/blockchain">Blockchain</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#distributed">Distributed</Nav.Link>
            <Nav.Link href="#tokens">Tokens</Nav.Link>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      
    )
}

export default header;
