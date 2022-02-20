import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Textblock = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Lorem Ipsum is simply</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Textblock;
