import React, {Component} from 'react';
import Example1 from './example1.js';
import Example2 from './example2.js';
import {Button, Checkbox, EditBox, Slider} from 'components'
import fmt from 'rssi';

class ui extends Component {
  render() {
    return (
      <div>
        <Slider
          min={1}
          max={100}
          step={1}
          start={1}
          label={fmt('и его значение: #{number}')}
          id="test-slider"
        >
          Слайдерик
        </Slider>

      </div>
    );
  }
}

export default ui;