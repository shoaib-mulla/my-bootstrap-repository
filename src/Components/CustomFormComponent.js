import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function CustomFormComponent() {
  return (
    <>
      <Container>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </Col>
          <Col md={6}>
            <input type="text" name="lastName" placeholder="Last Name" />
          </Col>
        </Row>
        <Row className="mb-3" md={5}>
          <input type="text" name="phone" placeholder="Phone" />
        </Row>
      </Container>
    </>
  );
}

export default CustomFormComponent;
