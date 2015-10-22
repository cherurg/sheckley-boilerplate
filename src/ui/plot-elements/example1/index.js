import {example1} from 'plots';
import React, {Component} from 'react';

class Example1Component extends Component {
  static defaultProps = {
    id: 'plot'
  };

  componentDidMount() {
    example1(this.props.id);
  }

  render() {
    return (
      <div id={this.props.id}>
      </div>
    );
  }
}

export default Example1Component;