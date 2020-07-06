import React from 'react';
import SectionTemplate from './sectionTemplate';

class About extends React.Component {
  renderLeftSection() {
    return (
      <div id ="profile">
        <img src="/img/Avatar.jpg" alt="Avatar"></img>
        <h2>Yubai Liu/Robert</h2>
        <h3>Web Developer</h3>
      </div>
    );
  }

  renderightSection() {
    return (
      <div id="profileText">
        <h1>About</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }

  render() {
    return (
      <SectionTemplate leftsection={this.renderLeftSection()} rightsection={this.renderightSection()} />
    );
  }
}

export default About;