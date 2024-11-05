import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function CustomForm() {
  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Control type="text" name="firstname" placeholder="First Name" />
        </Col>
        <Col md={6}>
          <Form.Control type="text" name="lastname" placeholder="Last Name" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Control type="text" name="phone" placeholder="Phone No" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button variant="primary" className="me-2">
            Submit
          </Button>
          <Button variant="secondary">Cancel</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomForm;
