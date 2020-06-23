import React from 'react';
import {Container} from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <footer>
          <p className="powerby">
            Build with  
            <a href="https://react-bootstrap.github.io/"> react-bootstrap </a>
            by 
            <a href="https://github.com/r0bertLiu"> r0bertLiu</a>
            <button className="back-button float-right">
              <i className="material-icons">expand_less</i>
            </button>
          </p>
          
        </footer>
      </Container>
    );
  }
}


export default Footer;
