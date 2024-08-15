import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ServicesSection.css';

const services = [
  {
    title: 'Service 1',
    description: 'Description for service 1.',
  },
  {
    title: 'Service 2',
    description: 'Description for service 2.',
  },
  {
    title: 'Service 3',
    description: 'Description for service 3.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <Container>
        <h2>Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                    </Card.Body>
                  </div>
                  <div className="flip-card-back">
                    <Card.Body>
                      <Card.Text>{service.description}</Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
