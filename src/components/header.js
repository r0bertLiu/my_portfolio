import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';


class ToggleIcon extends React.Component {
  render() {
    return (
      <i className="material-icons" >
        {this.props.value}
      </i>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleExpand: false,
    };
  }

  handleSelect = (eventKey) => {
    const navBar = document.querySelector('.navbar');
    const yOffset = -navBar.clientHeight;
    let element = document.getElementById(eventKey);
    var position = element.getBoundingClientRect();
    var y = position.top  + window.pageYOffset + yOffset ;
    window.scrollTo(0, y);

    // change toggle status as the menu close by default
    let toggleStatus = this.state.toggleExpand ? false : true;
    this.setState({
      toggleExpand: toggleStatus,
    });
  };

  renderToggleIcon() {
    // select icon
    let i = this.state.toggleExpand ? "close" : "menu";
    return <ToggleIcon 
             value={i} 
         />;
  }

  onNavbarToggleClick() {
    // change toggle status
    let toggleStatus = this.state.toggleExpand ? false : true;
    this.setState({
      toggleExpand: toggleStatus,
    });
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/">r0bertLiu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" children={this.renderToggleIcon()}  onClick={() => this.onNavbarToggleClick()} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" onSelect={this.handleSelect}>
            <Nav.Link href="#" eventKey="div1">Features</Nav.Link>
            <Nav.Link href="#" eventKey="div2">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;