import React, {Component} from 'react';
import Example1 from './example1.js';
import Example2 from './example2.js';

class ui extends Component {
  render() {
    return (
      <div>
        <Example1/>
        <Example2/>
      </div>
    );
  }
}

export default ui;