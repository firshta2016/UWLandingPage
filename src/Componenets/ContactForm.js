import React from "react";
import styled from "styled-components";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import useForm from "./useForm";
import validate from "./ValidateInfo";

const ContactForm = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);
  return (
    <StyledWrapper>
      <Container fluid>
        <Row className="justify-content-center">
          <Col sm={12} md={8} lg={6} className="pl-5">
            <Card className="mt-5">
              <Card.Body className="cardbody">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Telephone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="000-000-0000"
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Would you like to receive additional email communications?"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};
export default ContactForm;

const StyledWrapper = styled.div`
  .cardbody {
    background-color: lightgrey;
  }
  p {
    color: red;
  }
  button {
    background-color: #3a3b3c;
    width: 30%;
  }
`;
