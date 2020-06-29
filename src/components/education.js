import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Education extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col lg={4}>
          <h1>Education</h1>
        </Col>
        <Col lg={8}>
        <ul>
            <li>
              <h2>University of New South Wales</h2>
              <h3>Master of Information Technology, major in Artificial Intelligence</h3>
              <h3>2018 - 2020</h3>
            </li>
            <li>
              <h2>University of New South Wales</h2>
              <h3>Graduate certificate of Design, focus on Interactive Design</h3>
              <h3>2017 - 2017</h3>
            </li>
            <li>
              <h2>North China University of Technology</h2>
              <h3>Master of Engineering, major in Digital Media</h3>
              <h3>2012 - 2017</h3>
            </li>
          </ul>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Education;