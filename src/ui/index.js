import React, {Component} from 'react';
import Example1 from './example1.js';
import Example2 from './example2.js';
import {Button, Checkbox, EditBox, Slider, DropDown} from 'components'
import fmt from 'rssi';

class ui extends Component {
  render() {
    return (
      <DropDown
        id="test-dropDown"
        list={[
          "элементик",
          "другой элементик",
          "элементище"
        ]}
      />
    );
  }
}

export default ui;