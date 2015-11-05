import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import getId from 'utils/id-generator';
import {bindButtonAdd, bindButtonRemove, bindButtonDown, bindButtonUp} from 'actions/button';

class Button extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  static defaultProps = {
    onMouseDown: function () {
      this.setState({active: true});

      let element = $(findDOMNode(this));
      if (!element.hasClass('active')) {
        element.button('toggle');
      }
    },

    onMouseUp: function () {
      let element = $(findDOMNode(this));

      setTimeout(() => {
        this.setState({active: false});
        if (element.hasClass('active')) {
          element.button('toggle');
        }
      }, 1000);
    }
  };

  state = {
    active: false
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    bindButtonAdd(this.props.id);
  }

  componentWillUnmount() {
    bindButtonRemove(this.props.id);
  }

  render() {
    let {onMouseDown, onMouseUp, children} = this.props;
    return (
      <div className={'btn'}
           onMouseDown={onMouseDown.bind(this)}
           onMouseUp={onMouseUp.bind(this)}>
        {children}
      </div>
    );
  }
}

export default Button;