import React from "react";
import { Card } from "react-bootstrap";

const Principal = () => {
  return (
    <section className="fade-in-section mb-4">
              <Card className="p-4 border-0 shadow-sm hover-card">
                <h2>Sección Principal</h2>
                <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minima eos eveniet ducimus maxime, dolore aliquid error sed veniam totam quo aspernatur explicabo debitis distinctio voluptatibus facere, quis modi pariatur?
                </p>
                <hr />
                <div className="bg-secondary text-white p-5 rounded">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero itaque culpa laudantium ex perferendis sapiente hic laborum possimus dicta! Vel est sequi itaque corrupti dolor inventore necessitatibus, dolorem perspiciatis natus!
                </div>
              </Card>
            </section>
  );
};

export default Principal;