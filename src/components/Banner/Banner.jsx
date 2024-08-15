import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <Container className="feature-container">
      <Row className="align-items-center">
        <Col className="feature-background">
          <div className="feature-info">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula cursus erat, nec tincidunt nisl interdum nec. Suspendisse potenti. Vivamus suscipit velit a eros consectetur, in fermentum ex faucibus.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
