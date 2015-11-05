import React, {Component} from 'react';
import {Plot} from 'components';
import {example1} from 'components/plots';

class Example1 extends Component {
  render() {
    return (
      <Plot
        id="plot1"
        plotFunc={example1}/>
    );
  }
}

export default Example1;