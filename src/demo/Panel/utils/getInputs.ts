import {
  DECIMAL_PLACES_SELECTOR,
  FIRST_VALUE_SELECTOR,
  HAS_FILL_SELECTOR,
  HAS_SCALE_SELECTOR,
  HAS_TIPS_SELECTOR,
  IS_DECIMAL_SELECTOR,
  IS_RANGE_SELECTOR,
  IS_VERTICAL_SELECTOR,
  MAX_SELECTOR,
  MIN_SELECTOR,
  SECOND_VALUE_SELECTOR,
  STEP_SELECTOR,
} from '../constants';

function getInputs(panel: HTMLElement) {
  const minValueInput = <HTMLInputElement>panel.querySelector(MIN_SELECTOR);
  const maxValueInput = <HTMLInputElement>panel.querySelector(MAX_SELECTOR);
  const firstValueInput = <HTMLInputElement>panel.querySelector(FIRST_VALUE_SELECTOR);
  const secondValueInput = <HTMLInputElement>panel.querySelector(SECOND_VALUE_SELECTOR);
  const decimalPlacesInput = <HTMLInputElement>(
    panel.querySelector(DECIMAL_PLACES_SELECTOR)
  );
  const stepInput = <HTMLInputElement>panel.querySelector(STEP_SELECTOR);
  const isRange = <HTMLInputElement>panel.querySelector(IS_RANGE_SELECTOR);
  const isVertical = <HTMLInputElement>panel.querySelector(IS_VERTICAL_SELECTOR);
  const hasFill = <HTMLInputElement>panel.querySelector(HAS_FILL_SELECTOR);
  const hasTips = <HTMLInputElement>panel.querySelector(HAS_TIPS_SELECTOR);
  const hasScale = <HTMLInputElement>panel.querySelector(HAS_SCALE_SELECTOR);
  const isDecimal = <HTMLInputElement>panel.querySelector(IS_DECIMAL_SELECTOR);

  return {
    minValueInput,
    maxValueInput,
    firstValueInput,
    secondValueInput,
    decimalPlacesInput,
    stepInput,
    isRange,
    isVertical,
    hasFill,
    hasTips,
    hasScale,
    isDecimal,
  };
}

export default getInputs;
