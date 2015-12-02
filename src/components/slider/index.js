import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import noUiSlider from 'nouislider';
import {
  bindSliderSet,
  bindSliderSlide,
  bindSliderAdd,
  bindSliderRemove
} from 'actions/slider';
import store from 'store';
let subscribe = store.subscribe;
import assign from 'object-assign';

var bindSlider = function (slider) {
  let {id, start, step, min, max} = this.props;

  let shift = 0;
  while (step !== Math.floor(step)) {
    step *= 10;
    start *= 10;
    min *= 10;
    max *= 10;
    shift++;
  }

  noUiSlider.create(slider, {
    start: start,
    step: step,
    connect: 'lower',
    range: {
      min: min,
      max: max
    }
  });

  slider.noUiSlider.on('slide', () => {
    let number = slider.noUiSlider.fixNumber(slider.noUiSlider.get());
    bindSliderSlide(id, number);
  });

  slider.noUiSlider.on('set', () => {
    if (this.state.slider.notTrigger) {
      this.state.slider.notTrigger = false;
      return;
    }
    let number = slider.noUiSlider.fixNumber(slider.noUiSlider.get());
    bindSliderSet(id, number);
  });

  slider.noUiSlider.shift = shift;
  slider.noUiSlider.fixNumber = function (number) {
    let localShift = shift;
    while (localShift-- > 0) {
      number /= 10;
    }
    return number;
  };

  slider.noUiSlider.unfixNumber = function (number) {
    let localShift = shift;
    while (localShift-- > 0) {
      number *= 10;
    }
    return number;
  };

  return slider.noUiSlider;
};

class Slider extends Component {

  static propTypes = {
    start: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    label: PropTypes.func,
    id: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      slider: {
        get: () => 0
      }
    };

    subscribe(() => {
      let slider = this.state.slider;

      let previousState = this.state.value;
      let state = store.getState().slider
        .filter(item => item.id === this.props.id)[0].value;

      if (state === previousState) return;

      this.setState({number: state});
      if (!!slider.set) {
        slider.notTrigger = true;
        slider.set(slider.unfixNumber(state));
      }
    });
  }

  componentDidMount() {
    var slider = bindSlider
      .call(this, findDOMNode(this)
      .querySelector('.slider__element'));

    this.setState({
      number: slider.fixNumber(slider.get()),
      slider
    });
  }

  componentWillMount() {
    bindSliderAdd(this.props.id, this.props);
  }

  componentWillUnmount() {
    bindSliderRemove(this.props.id);
  }

  render() {
    let {style} = this.props;
    let {number} = this.state;
    let shift = this.state.slider.shift;

    number *= 10 ** shift;
    number = Math.floor(number);
    number /= 10 ** shift;

    if (!style) {
      style = {
        width: '20em'
      };
    }

    return (
      <div className='slider' style={style}>
        <span
          className='slider__name'>
          {this.props.label({number})}
        </span>

        <div className='slider__element'></div>
      </div>
    );
  }
}

export default Slider;