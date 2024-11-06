import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import TableContainer from "./TableContainer";

function CustomForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const handleSubmit = () => {
    if (firstName || lastName || phone) {
      const newEntry = { firstName, lastName, phone };
      setSubmittedData((prevData) => [...prevData, newEntry]);
      setFirstName("");
      setLastName("");
      setPhone("");
    } else {
      console.log("Cannot add empty entry");
    }
  };
  const sortedData = [...submittedData].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );
  return (
    <>
      <Container className="mt-4">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Control
              type="text"
              name="lastname"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone No"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" className="me-2" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="secondary">Cancel</Button>
          </Col>
        </Row>
      </Container>
      {submittedData && <TableContainer data={sortedData} />}
    </>
  );
}

export default CustomForm;
