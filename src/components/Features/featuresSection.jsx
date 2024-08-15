import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './featuresSection.css';

const features = [
  {
    title: 'Feature 1',
    description: 'Description for feature 1.',
    icon: 'star',
  },
  {
    title: 'Feature 2',
    description: 'Description for feature 2.',
    icon: 'rocket',
  },
  {
    title: 'Feature 3',
    description: 'Description for feature 3.',
    icon: 'cog',
  },
  
];

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.7, 
  });

  return (
    <section id="features" className="features-section">
      <Container ref={ref} className={`animate-container ${inView ? 'animate' : ''}`}>
        <h2>Our Features</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} key={index} className={`mb-4 feature-item feature-${index + 1}`}>
              <Card className='feature-container'>
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
