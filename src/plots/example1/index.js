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

let counter = 0;
let angle = counter * Math.PI / 6;
let isCheckbox= false;
let point;

let addPoint = function () {
  point = plotter.addPoint(vectorLength * Math.sin(angle), vectorLength * Math.cos(angle), { size: 5 });
};

let removePoint = function () {
  plotter.remove(point);
  point = null;
};

let addVector = function () {
  vector = plotter.addLine(0, 0, vectorLength * Math.sin(angle), vectorLength * Math.cos(angle), lineConfig);
  if (isCheckbox) {
    addPoint();
  }
};

let removeVector = function () {
  plotter.remove(vector);
  if (point) {
    removePoint();
  }
};

let buttonsHandler = function (action) {
  switch (action.id) {
    case 'test-button':
      removeVector();
      counter++;
      angle = counter * Math.PI / 6;
      addVector();
      break;
  }
};

let slidersHandler = function (action) {
  switch (action.id) {
    case 'test-slider':
      removeVector();
      removeCircle();

      vectorLength = action.value;
      addVector();
      addCircle();

      break;
  }
};

let checkBoxesHandler = function (action, isEnabled) {
  switch (action.id) {
    case 'test-checkbox':
      isCheckbox = isEnabled;
      if (isEnabled) {
        addPoint();
      } else {
        removePoint();
      }
      break;
  }
};

let dropDownsHandler = function (action) {
  switch (action.id) {
    case 'test-dropDown':
      console.log(action);
      break;
  }
};

defaultHandlers({
  buttonsHandler,
  slidersHandler,
  checkBoxesHandler,
  dropDownsHandler
});

export default function (id) {
  plotter = new Plotter(id);
  vector = plotter.addLine(0, 0, 0, vectorLength, lineConfig);
  addCircle();
};
