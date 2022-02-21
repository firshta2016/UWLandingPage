import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroArea = () => {
  return (
    <StyledWrapper>
      <div className="jumbotron jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row
            className="justify-content-center p-5
        "
          >
            <Col>
              <h2 className="display-1 font-weight-bolder">
                I am a Photographer
              </h2>
              <h3 className="display-4 font-weight-light">
                Contact me for more information
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledWrapper>
  );
};

export default HeroArea;
const StyledWrapper = styled.div`
  h2 {
    font-size: calc(1em + 4vw);
  }
  h3 {
    font-size: calc(1em + 3vw);
  }
`;
