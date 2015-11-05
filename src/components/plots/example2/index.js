import {Plotter} from 'sheckley';
import getSomething from './get-something.js';

export default function (id) {
  let a = getSomething();
  let s = new Plotter(id);
  s.addFunc(x => getSomething(x));
};