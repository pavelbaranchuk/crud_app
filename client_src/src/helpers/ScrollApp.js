import React from 'react';

/** React components for scrolling back to the top of the page **/

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({intervalId: intervalId});
  }

  render() {
    return (
      <button
        title="Back to top"
        id="arrow"
        className="scroll"
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <span className="arrow-up glyphicon glyphicon-chevron-up">
          <h3>↑</h3>
        </span>
      </button>
    );
  }
}

class ScrollApp extends React.Component {
  constructor() {
    super();

    this.state = {
      colors: ['#044747', '#079191', '#38adad', '#90e3e3', '#d5f7f7'],
    };
  }

  render() {
    return (
      <div className="long">
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    );
  }
}
/*
 * Render the ScrollApp component into the div with the id 'app'
 */

export default ScrollApp;
