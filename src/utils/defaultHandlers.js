import {ACTION, emitter} from 'store/eventer';
import {BUTTON_DOWN, BUTTON_UP} from 'constants/buttonActions';
import {SLIDER_SET, SLIDER_SLIDE} from 'constants/sliderActions';
import {CHECKBOX_DISABLE, CHECKBOX_ENABLE} from 'constants/checkboxActions';

let wrapHandler = (handler) => {
  return handler || function () {
    };
};

export default function (handlers) {
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

      case CHECKBOX_DISABLE:
        checkBoxesHandler(action, false);
        break;

      case CHECKBOX_ENABLE:
        checkBoxesHandler(action, true);
        break;
    }
  });
}