import {Plotter} from 'sheckley';
import getSomething from './get-something.js';
import defaultHandlers from 'utils/defaultHandlers';

let plotter;
let func;
let vector;
let vectorLength = 1;
let lineConfig = {
  color: 7,
  strokeWidth: 2
};

let circle = {};

let removeCircle = function () {
  plotter.remove(circle.up);
  plotter.remove(circle.down);
};
let addCircle = function () {
  circle.up = plotter.addFunc((x) => Math.sqrt(vectorLength ** 2 - x ** 2), { left: -vectorLength, right: vectorLength });
  circle.down = plotter.addFunc((x) => -Math.sqrt(vectorLength ** 2 - x ** 2), { left: -vectorLength, right: vectorLength });
};

export default function (id) {
  plotter = new Plotter(id);
  vector = plotter.addLine(0, 0, 0, vectorLength, lineConfig);
  addCircle();
};

let counter = 0;
let angle = counter * Math.PI / 6;
let addVector = function () {
  vector = plotter.addLine(0, 0, vectorLength * Math.sin(angle), vectorLength * Math.cos(angle), lineConfig);
};

let buttonsHandler = function (action) {
  switch (action.id) {
    case 'test-button':
      plotter.remove(vector);
      counter++;
      angle = counter * Math.PI / 6;
      addVector();
      break;
  }
};

let slidersHandler = function (action) {
  switch (action.id) {
    case 'test-slider':
      plotter.remove(vector);
      removeCircle();

      vectorLength = action.value;
      addVector();
      addCircle();

      break;
  }
};

defaultHandlers({
  buttonsHandler,
  slidersHandler
});
