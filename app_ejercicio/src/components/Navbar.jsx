import React from 'react'
import { Navbar, Container, Nav, Button, Row, Col} from 'react-bootstrap'

const AppNavbar = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
        <Container>
          <Navbar.Brand href="#home">NavEjemplo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Proyectos</Nav.Link>
              <Button variant="outline-info" className="ms-2">Contacto</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default AppNavbar
