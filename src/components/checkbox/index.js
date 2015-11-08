import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {
  bindCheckboxAdd,
  bindCheckboxRemove,
  bindCheckboxEnable,
  bindCheckboxDisable
} from 'actions/checkbox';
import store from 'store';

let subscribe = store.subscribe;

class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  static defaultProps = {
    onChange() {
      let {isChecked} = this.state;
      let {id} = this.props;

      if (isChecked) {
        bindCheckboxDisable(id);
      } else {
        bindCheckboxEnable(id);
      }
    }
  };

  state = {
    isChecked: false
  };

  constructor(props) {
    super(props);
    subscribe(() => {
      let previousState = this.state.isChecked;
      let state = store.getState().checkbox
        .filter(item => item.id === this.props.id)[0].isChecked;

      if (state === previousState) return;

      this.setState({isChecked: state});
    });
  }

  componentWillMount() {
    bindCheckboxAdd(this.props.id);
  }

  componentWillUnmount() {
    bindCheckboxRemove(this.props.id);
  }

  render() {
    let {isChecked} = this.state;
    let {onChange} = this.props;

    return (
      <label className='checkbox'>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange.bind(this)}
          className='checkbox__element'
        />

        <p className='checkbox__label'>{
          this.props.children
        }</p>
      </label>
    );
  }
}

export default Checkbox;