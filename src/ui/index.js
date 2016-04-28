import React, {Component} from 'react';
import Example1 from './example1.js';
import Example2 from './example2.js';
import {Button, Checkbox, EditBox, Slider, DropDown} from 'components'
import fmt from 'rssi';

class ui extends Component {
  render() {
    return (
      <div>
        <DropDown
          id="test-dropDown"
          list={[
          "элементик",
          "другой элементик",
          "элементище"
        ]}
          selected={1}
        />
        <Slider
          min={1}
          max={2}
          step={0.01}
          start={1}
          label={fmt('Длина вектора: #{number}')}
          id="test-slider"
        >
          Слайдерик
        </Slider>
        <EditBox id="text-editbox" defaultValue={2}>
        </EditBox>
        <br/>
        <Button id="test-button">Кнопочка</Button>
        <span>На графике нарисована константа f(x) = 7. Если нажать на кнопку, то это уменьшит значение константы на 1.</span><br/>
        <Checkbox id="test-checkbox">Чекбоксик</Checkbox>
        <span>
          Все предсталенные здесь элементы синхронизированные. Когда главный клиент (преподаватель) меняет у себя
          состояние объекта, то же самое мгновенно происходит у студентов. Изменение вызывает события, которые передаются
          через сервер. События отлавливаются приложениями, и меняют свой внешний вид. Точно так же могут менять свой вид
          графики, которые тоже синронизированные.
          Шаблон (или даже минифреймворк) называется <b>Sheckley Boilerplate</b>. Сделано и продолжает делаться
          Алексеем Карповым специально для VisualMath.ru.
        </span>
        <Example1/>
      </div>
    );
  }
}

export default ui;