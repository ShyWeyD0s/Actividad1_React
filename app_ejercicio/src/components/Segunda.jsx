import { Card } from 'react-bootstrap';
import React from 'react';


const Segunda = () => {
  return (
            <section className="fade-in-section mb-4" style={{ animationDelay: '0.4s' }}>
              <Card className="p-3 border-0 shadow-sm bg-white">
                <h4>Segunda Sección</h4>
                <p className="text-muted">
                    Contenido adicional para la página. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="mt-4 p-3 bg-light rounded">
                  <small>Esta es la segunda sección de contenido principal.</small>
                </div>
              </Card>
            </section>
    );
  };
  
  export default Segunda;

        