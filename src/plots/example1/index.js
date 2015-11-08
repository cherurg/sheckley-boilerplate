import {Plotter} from 'sheckley';
import getSomething from './get-something.js';
import {ACTION, emitter} from 'store/eventer';
import {BUTTON_DOWN, BUTTON_UP} from 'constants/buttonActions';

let plotter;
let func;

export default function (id) {
  plotter = new Plotter(id);
  func = plotter.addFunc(x => getSomething(x));

  events();
};

let counter = 0;
let buttonsHandler = function (action) {
  switch (action.id) {
    case 'test-button':
      plotter.remove(func);
      counter++;
      func = plotter.addFunc(x => getSomething(x) - counter);
      break;
  }
};

let events = function () {
  emitter.on(ACTION, action => {
    switch (action.type) {
      case BUTTON_UP:
        buttonsHandler(action);
        break;
    }
  });
};