import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <StyledWrapper>
      <div className="main-footer mt-5">
        <Container className="container">
          <Row className="row">
            <Col></Col>
          </Row>
        </Container>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .main-footer {
    background-color: lightgrey;
    height: 200px;
  }
`;
export default Footer;
