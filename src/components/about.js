import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col md={4}>
          <h1>About</h1>
        </Col>
        <Col md={8}>md=4</Col>
        </Row>
      </Container>
    );
  }
}

export default About;