import {
  DECIMAL_PLACES_CLASS,
  FIRST_VALUE_CLASS,
  HAS_FILL_CLASS,
  HAS_SCALE_CLASS,
  HAS_TIPS_CLASS,
  IS_DECIMAL_CLASS,
  IS_RANGE_CLASS,
  IS_VERTICAL_CLASS,
  MAX_CLASS,
  MIN_CLASS,
  SECOND_VALUE_CLASS,
  STEP_CLASS,
} from '../../../utils/constants';
import Panel from '../Panel';

function initializeInputs(this: Panel, root: string) {
  const panel = <HTMLElement>(
    document.querySelector(`.js-${root.slice(1)}-panel`)
  );

  this.minValueInput = <HTMLInputElement>(
    panel.querySelector(`.js-${MIN_CLASS}`)
  );
  this.maxValueInput = <HTMLInputElement>(
    panel.querySelector(`.js-${MAX_CLASS}`)
  );
  this.firstValueInput = <HTMLInputElement>(
    panel.querySelector(`.js-${FIRST_VALUE_CLASS}`)
  );
  this.secondValueInput = <HTMLInputElement>(
    panel.querySelector(`.js-${SECOND_VALUE_CLASS}`)
  );
  this.decimalPlacesInput = <HTMLInputElement>(
    panel.querySelector(`.js-${DECIMAL_PLACES_CLASS}`)
  );
  this.stepInput = <HTMLInputElement>panel.querySelector(`.js-${STEP_CLASS}`);

  this.isRange = <HTMLInputElement>panel.querySelector(`.js-${IS_RANGE_CLASS}`);
  this.isVertical = <HTMLInputElement>(
    panel.querySelector(`.js-${IS_VERTICAL_CLASS}`)
  );
  this.hasFill = <HTMLInputElement>panel.querySelector(`.js-${HAS_FILL_CLASS}`);
  this.hasTips = <HTMLInputElement>panel.querySelector(`.js-${HAS_TIPS_CLASS}`);
  this.hasScale = <HTMLInputElement>(
    panel.querySelector(`.js-${HAS_SCALE_CLASS}`)
  );
  this.isDecimal = <HTMLInputElement>(
    panel.querySelector(`.js-${IS_DECIMAL_CLASS}`)
  );
}
export default initializeInputs;
