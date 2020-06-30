import React from 'react';
import SectionTemplate from './sectionTemplate';

class Projects extends React.Component {
  renderLeftSection() {
    return <h1>Projects</h1>;
  }

  renderightSection() {
    return ("md=4");
  }

  render() {
    return (
      <SectionTemplate leftsection={this.renderLeftSection()} rightsection={this.renderightSection()} />
    );
  }
}

export default Projects;