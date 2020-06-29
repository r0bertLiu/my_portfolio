import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Contact extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <Col lg={4}>
          <h1>Contact</h1>
        </Col>
        <Col lg={8}>
          <ul className="contact-ul">
            <li >
              <i className="fa fa-phone large-icon" aria-hidden="true"></i>
              <span> +61 0422016123 </span>
            </li>
            <li >
              <i className="fa fa-envelope large-icon" aria-hidden="true"></i>
              <span> 
                <a href="mailto:RobertLiu0313@gmail.com">RobertLiu0313@gmail.com</a>
              </span>
            </li>
            <li >
              <i className="fa fa-github large-icon" aria-hidden="true"></i>
              <span> 
                <a href="https://github.com/r0bertLiu">https://github.com/r0bertLiu</a>
              </span>
            </li>
          </ul>
        </Col>
        </Row>
      </Container>
    );
  }
}



export default Contact;