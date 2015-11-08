import React, {Component} from 'react';
import Example1 from './example1.js';
import Example2 from './example2.js';
import {Button, Checkbox} from 'components'

class ui extends Component {
  render() {
    return (
      <div>
        <Button id="test-button">
          Кнопочка
        </Button>
        <Checkbox id="test-checkbox">
          Чекбоксик
        </Checkbox>
        <Example1/>
      </div>
    );
  }
}

export default ui;