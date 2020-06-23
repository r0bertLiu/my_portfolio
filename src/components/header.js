import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';


class ToggleIcon extends React.Component {
  render() {
    return (
      <i className={this.props.class} >
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
      darkMode: false,
    };
  }

  handleNavSelect = (eventKey) => {
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

  handleDarkToggleClick = () => {
    let darkModeStatus = this.state.darkMode ? false : true;
    this.setState({
      darkMode: darkModeStatus,
    });
    const navBar = document.querySelector('.navbar');
    navBar.classList.toggle("bg-dark");
    navBar.classList.toggle("navbar-dark");
    navBar.classList.toggle("navbarBorder-dark");

    document.querySelectorAll(".bgClass1").forEach(element => element.classList.toggle("DarkbgClass1"));
    document.querySelectorAll(".bgClass2").forEach(element => element.classList.toggle("DarkbgClass2"));
  };

  renderToggleIcon() {
    // select icon
    let i = this.state.toggleExpand ? "close" : "menu";
    let j = "material-icons";
    return <ToggleIcon 
             value={i}
             class={j}
         />;
  }

  renderDarkToggleIcon() {
    let i = this.state.darkMode? "wb_sunny" : "brightness_2";
    let j = this.state.darkMode? "material-icons-outlined":  "material-icons";
    return <ToggleIcon 
             value={i}
             class={j}
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
      <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top" className="navbarBorder-light">
        <Container>
          <Navbar.Brand href="/">r0bertLiu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" children={this.renderToggleIcon()}  onClick={() => this.onNavbarToggleClick()} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" onSelect={this.handleNavSelect}>
              <Nav.Link href="#" eventKey="home">Home</Nav.Link>
              <Nav.Link href="#" eventKey="about">About</Nav.Link>
              <Nav.Link href="#" eventKey="projects">Projects</Nav.Link>
              <Nav.Link href="#" eventKey="education">Education</Nav.Link>
              <Nav.Link href="#" eventKey="contact">Contact</Nav.Link>
            </Nav>
            <Nav onSelect={this.handleDarkToggleClick}>
              <Nav.Link href="#">
                {this.renderDarkToggleIcon()}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;