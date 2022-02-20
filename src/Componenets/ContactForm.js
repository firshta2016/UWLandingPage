import React from "react";
import styled from "styled-components";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

const ContactForm = () => {
  return (
    <StyledWrapper>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="pl-5">
            <Card className="mt-5">
              <Card.Body className="cardbody">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" />
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
`;

//https://www.youtube.com/watch?v=pnsnFkx8OyU
