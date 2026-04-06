import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.jsx'
import Principal from './components/Principal.jsx'
import Segunda from './components/Segunda.jsx'
import Aside from './components/Aside.jsx'
import Footer from './components/Footer.jsx'
 import { Container, Row, Col } from 'react-bootstrap' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <Navbar />
    <Container className="my-4">
      <Row>
        <Col lg={8}>
          <Principal />
          <Segunda />
        </Col>
        <Col lg={4}>
          <Aside />
        </Col>
      </Row>
       <Footer />
    </Container>
  </StrictMode>
  
  
)


