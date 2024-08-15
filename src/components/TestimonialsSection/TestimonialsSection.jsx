import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './TestimonialsSection.css'; 

const testimonials = [
  {
    quote: "This service is amazing! Highly recommend it to everyone.",
    author: "Pawan Singh",
  },
  {
    quote: "An excellent experience with fantastic customer support.",
    author: "Raghvendra Singh",
  },
  {
    quote: "The best decision we made was to use this service.",
    author: "Shailendra Singh",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <Container>
        <h2>What Our Clients Say </h2>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <blockquote>
                <p>{testimonial.quote}</p>
                <footer>{testimonial.author}</footer>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
