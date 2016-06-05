import React, { Component } from 'react'; // eslint-disable-line
import { render } from 'react-dom';

class Example extends Component { // eslint-disable-line
  render() {
    return <h1>Hello World!</h1>;
  }
};

render(<Example />, document.getElementById('react-app'));
