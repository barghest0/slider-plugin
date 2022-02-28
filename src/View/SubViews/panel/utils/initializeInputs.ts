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
} from '../../../../constants/panel';
import Panel from '../Panel';

function initializeInputs(this: Panel) {
  this.minValueInput = <HTMLInputElement>this.panel.querySelector(`.js-${MIN_CLASS}`);
  this.maxValueInput = <HTMLInputElement>this.panel.querySelector(`.js-${MAX_CLASS}`);
  this.firstValueInput = <HTMLInputElement>(
    this.panel.querySelector(`.js-${FIRST_VALUE_CLASS}`)
  );
  this.secondValueInput = <HTMLInputElement>(
    this.panel.querySelector(`.js-${SECOND_VALUE_CLASS}`)
  );
  this.decimalPlacesInput = <HTMLInputElement>(
    this.panel.querySelector(`.js-${DECIMAL_PLACES_CLASS}`)
  );
  this.stepInput = <HTMLInputElement>this.panel.querySelector(`.js-${STEP_CLASS}`);
  this.isRange = <HTMLInputElement>this.panel.querySelector(`.js-${IS_RANGE_CLASS}`);
  this.isVertical = <HTMLInputElement>(
    this.panel.querySelector(`.js-${IS_VERTICAL_CLASS}`)
  );
  this.hasFill = <HTMLInputElement>this.panel.querySelector(`.js-${HAS_FILL_CLASS}`);
  this.hasTips = <HTMLInputElement>this.panel.querySelector(`.js-${HAS_TIPS_CLASS}`);
  this.hasScale = <HTMLInputElement>this.panel.querySelector(`.js-${HAS_SCALE_CLASS}`);
  this.isDecimal = <HTMLInputElement>this.panel.querySelector(`.js-${IS_DECIMAL_CLASS}`);
}
export default initializeInputs;
