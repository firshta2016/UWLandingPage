import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroArea = () => {
  return (
    <StyledWrapper>
      <div className="jumbotron jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row
            className="justify-content-center py-5
        "
          >
            <Col sm={8} md={6} lg={4}>
              <h2 className="display-1 font-weight-bolder">
                I am a Photographer
              </h2>
              <h3 className="display-4 font-weight-light">
                Contact me for more information
              </h3>
              <Button>Hire me</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledWrapper>
  );
};

export default HeroArea;
const StyledWrapper = styled.div`
  h2,
  h3 {
    font-size: 8vw;
  }
`;
