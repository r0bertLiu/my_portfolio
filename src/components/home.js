import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col md={4}>
          <h1>Home</h1>
        </Col>
        <Col md={8}>md=4</Col>
        </Row>
      </Container>
    );
  }
}

export default Home;