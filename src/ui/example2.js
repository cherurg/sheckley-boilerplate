import React, {Component} from 'react';
import {Plot} from 'components';
import {example2} from 'plots';

class Example1 extends Component {
  render() {
    return (
      <Plot
        id="plot2"
        plotFunc={example2}/>
    );
  }
}

export default Example1;