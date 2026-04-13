import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from './components/Navbar.jsx'
import Principal from './components/Principal.jsx'
import Segunda from './components/Segunda.jsx'
import Aside from './components/Aside.jsx'
import './App.css'

const App = () => {
  return (
    <div className='App'>
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
      </Container>
      Prueba
    </div>
  )
}

export default App
