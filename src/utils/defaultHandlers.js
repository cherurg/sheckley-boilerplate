import {ACTION, emitter} from 'store/eventer';
import {BUTTON_DOWN, BUTTON_UP} from 'constants/buttonActions';
import {SLIDER_SET, SLIDER_SLIDE} from 'constants/sliderActions';

let wrapHandler = (handler) => {
  return handler || function () {};
};

export default function(handlers) {
  let buttonsHandler = wrapHandler(handlers.buttonsHandler);
  let slidersHandler = wrapHandler(handlers.slidersHandler);
  let dropDownsHandler = wrapHandler(handlers.dropDownsHandler);
  let editBoxesHandler = wrapHandler(handlers.editBoxesHandler);
  let checkBoxesHandler = wrapHandler(handlers.checkBoxesHandler);

  emitter.on(ACTION, action => {
    switch (action.type) {
      case BUTTON_UP:
        buttonsHandler(action);
        break;

      case SLIDER_SLIDE:
        slidersHandler(action);
        break;
    }
  });
}