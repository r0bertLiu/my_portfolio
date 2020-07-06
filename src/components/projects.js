import React from 'react';
import SectionTemplate from './sectionTemplate';
import { Row, Col, Card  } from 'react-bootstrap';

class Projects extends React.Component {
  renderLeftSection() {
    return <h1>Projects</h1>;
  }

  renderightSection() {
    return (
      <Row xs={1} md={2}>
        <Col className="cardCol">
          <Card className="myCard">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="cardCol">
          <Card className="myCard">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col className="cardCol">
          <Card className="myCard">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <SectionTemplate leftsection={this.renderLeftSection()} rightsection={this.renderightSection()} />
    );
  }
}

export default Projects;