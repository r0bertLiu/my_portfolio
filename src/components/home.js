import React from 'react';

class Home extends React.Component {
  renderAnimationText() {
    let letters = "WELCOME".split("");
    console.log(letters)
    return (
      <div id="textAnimation">
        {letters.map((letter, i) => {
          let delay = 0.3 + Math.abs(i - 3) * 0.1;
          const divStyle = {
            animationDelay: `${delay}s`,
          };
          return <span style={divStyle}>{letter}</span>;
        })}

        {/* <span style={{animationDelay: '0.6s'}}>W</span>
        <span style={{animationDelay: '0.5s'}}>E</span>
        <span style={{animationDelay: '0.4s'}}>L</span>
        <span style={{animationDelay: '0.3s'}}>C</span>
        <span style={{animationDelay: '0.4s'}}>O</span>
        <span style={{animationDelay: '0.5s'}}>M</span>
        <span style={{animationDelay: '0.6s'}}>E</span> */}
      </div>
    );
  }

  render() {
    return (
      <div id="homeCover">
        {this.renderAnimationText()}
      </div>
    );
  }
}

export default Home;