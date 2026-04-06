import React from "react";
// Eliminamos la coma extra después de Nav
import { Card, Nav } from "react-bootstrap"; 
import "./Aside.css";

const Aside = () => {
  return (
    <div className="AsideContainer">
      <aside className="fade-in-section sticky-aside" style={{ animationDelay: '0.4s' }}>
        <Card className="p-3 border-0 shadow-sm">
          <Card.Header className="bg-white border-0 fw-bold">Aside</Card.Header>
          <Nav className="flex-column mt-2">
            <Nav.Link className="text-dark border-bottom py-2">Recursos Externos</Nav.Link>
            <Nav.Link className="text-dark border-bottom py-2">Documentación API</Nav.Link>
            <Nav.Link className="text-dark py-2">Ajustes del Sistema</Nav.Link>
          </Nav>
          <div className="mt-4 p-3 bg-dark text-info rounded small">
            <strong>Tip:</strong> Tip example
          </div>
        </Card>
      </aside>
    </div>
  );
};

export default Aside;