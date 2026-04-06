import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white py-5 mt-auto">
    <Container>
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h5 className="mb-1">React Bootstrap App</h5>
          <p className="small text-secondary mb-0">© 2026 Prototipo de Desarrollo</p>
        </Col>
        <Col md={6}>
          <Nav className="justify-content-center justify-content-md-end">
            <Nav.Link href="#" className="text-secondary small">Términos</Nav.Link>
            <Nav.Link href="#" className="text-secondary small">Contacto</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;