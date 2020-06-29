import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col lg={4}>
          <h1>Home</h1>
        </Col>
        <Col lg={8}>md=4</Col>
        </Row>
      </Container>
    );
  }
}

export default Home;