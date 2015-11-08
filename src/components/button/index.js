import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {
  bindButtonAdd,
  bindButtonRemove,
  bindButtonDown,
  bindButtonUp
} from 'actions/button';
import store from 'store';

let subscribe = store.subscribe;

class Button extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  static defaultProps = {
    onMouseDown() {
      bindButtonDown(this.props.id);
    },

    onMouseUp() {
      bindButtonUp(this.props.id);
    }
  };

  state = {
    active: false
  };

  constructor(props) {
    super(props);
    subscribe(() => {
      let previousState = this.state.active;
      let state = store.getState().button
        .filter(item => item.id === this.props.id)[0].isDown;

      if (state === previousState) return;

      this.setState({active: state});
    });
  }

  componentWillMount() {
    bindButtonAdd(this.props.id);
  }

  componentWillUnmount() {
    bindButtonRemove(this.props.id);
  }

  render() {
    let {onMouseDown, onMouseUp, children} = this.props;
    let {active} = this.state;
    return (
      <div className={'btn' + (active ? ' active' : '')}
           onMouseDown={onMouseDown.bind(this)}
           onMouseUp={onMouseUp.bind(this)}>
        {children}
      </div>
    );
  }
}

export default Button;