import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved by Amanat Singh</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>Follow us on social media: <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">LinkedIn</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
