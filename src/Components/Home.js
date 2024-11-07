import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <Container className="mt-5" style={{ marginBottom: "155px" }}>
      <header className="text-center mb-5">
        <h1>Welcome to Our Awesome Website!</h1>
        <p className="lead">
          Discover amazing features and explore endless possibilities.
        </p>
        <Button variant="primary" href="#features">
          Get Started
        </Button>
      </header>

      <section id="features" className="text-center my-5">
        <h2>Our Key Features</h2>
        <Row className="mt-4">
          <Col md={4}>
            <h3>Feature One</h3>
            <p>
              A brief description of this feature. It provides outstanding
              functionality and ease of use.
            </p>
          </Col>
          <Col md={4}>
            <h3>Feature Two</h3>
            <p>
              Another amazing feature that stands out. It’s designed to help you
              succeed and grow.
            </p>
          </Col>
          <Col md={4}>
            <h3>Feature Three</h3>
            <p>
              An innovative feature to make your experience seamless and
              efficient.
            </p>
          </Col>
        </Row>
      </section>

      {/* About Section */}
      <section id="about" className="text-center my-5">
        <h2>About Us</h2>
        <p>
          We are dedicated to creating valuable tools and resources to enhance
          your online experience. Our team works tirelessly to bring the latest
          features to our platform.
        </p>
      </section>

      {/* CTA Section */}
      <section id="cta" className="text-center my-5">
        <h2>Ready to Join Us?</h2>
        <p>
          Sign up today and start exploring all the incredible features we have
          to offer.
        </p>
        <Button variant="success" href="#signup">
          Sign Up Now
        </Button>
      </section>
    </Container>
  );
}

export default Home;
