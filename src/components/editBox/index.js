import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {
  bindEditBoxAdd,
  bindEditBoxRemove,
  bindEditBoxPlus,
  bindEditBoxMinus,
  bindEditBoxInput,
  bindEditBoxStepChange
} from 'actions/editBox';
import store from 'store';
import assign from 'object-assign';

let subscribe = store.subscribe;

class EditBox extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    defaultValue: PropTypes.number,
    step: PropTypes.number
  };

  static defaultProps = {
    onPlus() {
      let {id} = this.props;
      bindEditBoxPlus(id);
    },

    onMinus() {
      let {id} = this.props;
      bindEditBoxMinus(id);
    },

    onChange() {
      console.log(this);
      let {id} = this.props;
      let {value} = findDOMNode(this);
      bindEditBoxInput(id, value);
    }
  };

  state = {
    value: 0,
    step: 1
  };

  constructor(props) {
    super(props);
    subscribe(() => {
      let previousState = assign({}, this.state);
      let state = store.getState().editBox
        .filter(item => item.id === this.props.id)[0];

      if (state.value === previousState.value &&
        state.step === previousState.step) return;

      this.setState(state);
    });
  }

  componentWillMount() {
    bindEditBoxAdd(this.props.id, this.props.defaultValue, this.props.step);
  }

  componentWillUnmount() {
    bindEditBoxRemove(this.props.id);
  }

  render() {
    console.log(this.state);
    let {value} = this.state;
    let {
      onChange
      } = this.props;

    return (
        <input
          type="number"
          onChange={onChange.bind(this)}
          value={value}
          style={{width: '4em'}}
        />
    );
  }
}

export default EditBox;
