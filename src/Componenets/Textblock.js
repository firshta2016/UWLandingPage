import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";

const Textblock = () => {
  return (
    <StyledWrapper>
      <Container>
        <Row>
          <Col>
            <h1>Lorem Ipsum is simply</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
};

export default Textblock;

const StyledWrapper = styled.div`
  h1 {
    font-size: calc(1em + 2vw);
  }
  p {
    font-size: calc(1em + 0.5vw);
  }
`;
