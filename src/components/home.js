import React from 'react';
import SectionTemplate from './sectionTemplate';

class Home extends React.Component {
  renderLeftSection() {
    return <h1>Home</h1>;
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

export default Home;