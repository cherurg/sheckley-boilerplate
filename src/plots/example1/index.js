import {Plotter} from 'sheckley';
import getSomething from './get-something.js';

export default function (id) {
  let a = getSomething();
  new Plotter(id);
};