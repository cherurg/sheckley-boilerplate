import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import noUiSlider from 'nouislider';
import {
  bindSliderSet,
  bindSliderSlide
} from 'actions/slider';

import store from 'store';
import assign from 'object-assign';

var getFormatted = function (number) {
  var len = number.toString().length;
  return number.toString().slice(0, len - 3);
};

var bindSlider = function (slider) {
  let {id, start, step, min, max} = this.props;

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
    let number = getFormatted(slider.noUiSlider.get());
    this.setState({
      number: number
    });
    bindSliderSlide(id, number);
  });

  slider.noUiSlider.on('set', () => {
    let number = getFormatted(slider.noUiSlider.get());
    bindSliderSet(id, number);
  });

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
  }

  componentDidMount() {
    var slider = bindSlider
      .call(this, findDOMNode(this)
      .querySelector('.slider__element'));

    this.setState({
      number: getFormatted(slider.get())
    });
  }

  render() {
    let {style} = this.props;

    if (!style) {
      style = {
        width: '20em'
      };
    }

    return (
      <div className='slider' style={style}>
        <span
          className='slider__name'>
          {this.props.label({number: this.state.number})}
        </span>

        <div className='slider__element'></div>
      </div>
    );
  }
}

export default Slider;