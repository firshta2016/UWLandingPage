import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroArea = () => {
  return (
    <div className="jumbotron jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row
          className="justify-content-center py-5
        "
        >
          <Col sm={12} md={8} lg={4}>
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
  );
};
export default HeroArea;
