import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Education extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col md={4}>
          <h1>Education</h1>
        </Col>
        <Col md={8}>md=4</Col>
        </Row>
      </Container>
    );
  }
}

export default Education;