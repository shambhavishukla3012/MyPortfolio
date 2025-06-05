import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section" style={{ 
      backgroundColor: '#FFFFFF',
      paddingTop: '120px',
      paddingBottom: '80px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container style={{ maxWidth: '1100px' }}>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h1 className="hero-title" style={{ 
              fontSize: '60px',
              fontWeight: '700',
              color: 'var(--blue)',
              marginBottom: '20px',
              paddingTop: '20px',
            }}>
              Shambhavi Arvind Shukla
            </h1>
            <h3 className="hero-subtitle" style={{ 
              fontSize: '20px',
              fontWeight: '400',
              color: 'var(--primary-text)',
              marginBottom: '40px',
              textAlign: 'center',
              paddingTop: '10px',
            }}>
              Full Stack Developer <span style={{ margin: '0 10px' }}>-</span> 
              Building with purpose<span style={{ margin: '0 10px' }}></span> 
              
            </h3>
            <div className="hero-buttons d-flex justify-content-center gap-3 mb-5">
              <Button 
                variant="primary" 
                size="lg" 
                href="#about" 
                className="hero-button learn-more-btn"
                style={{ 
                  border: 'none',
                  borderRadius: '6px',
                  padding: '15px 15px',
                  width: '150px',
                  fontWeight: '450',
                  transition: 'background-color 0.3s'
                }}
              >
                Learn More
              </Button>
              <Button 
                variant="outline-primary" 
                size="lg" 
                href="#contact"
                className="hero-button contact-btn"
                style={{ 
                  color: '#333',
                  borderColor: '#ccc',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  padding: '15px 15px',
                  width: '170px',
                  fontWeight: '450',
                  transition: 'background-color 0.3s, color 0.3s'
                }}
              >
                Get in Touch
              </Button>
            </div>
            {/* <div className="scroll-indicator mt-5">
              <a href="#about" className="text-decoration-none">
                <i 
                  className="fas fa-chevron-down" 
                  style={{ 
                    color: 'rgba(0,0,0,0.3)', 
                    fontSize: '14px',
                    animation: 'bounce 2s infinite'
                  }}
                ></i>
              </a>
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
