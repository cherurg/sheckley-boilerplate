import React, {Component} from 'react';

class Plot extends Component {

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    plotFunc: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.plotFunc(this.props.id);
  }

  render() {
    return (
      <div id={this.props.id}/>
    );
  }
}

export default Plot;