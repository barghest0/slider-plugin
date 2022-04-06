import { FIRST_VALUE, SECOND_VALUE } from '../../../../Slider/constants';
import { Directions, SliderParams } from '../../../../Slider/types';

import Panel from '../Panel';

function initializePanelsParams(this: Panel) {
  const {
    min,
    max,
    value,
    isRange,
    step,
    direction,
    hasFill,
    hasTips,
    hasScale,
    decimalPlaces,
    isDecimal,
  }: SliderParams = this.view.getParams();

  this.minValueInput.value = min.toString();
  this.maxValueInput.value = max.toString();
  this.decimalPlacesInput.value = decimalPlaces.toString();
  if (isRange) {
    this.firstValueInput.value = value[FIRST_VALUE].toString();
    this.secondValueInput.value = value[SECOND_VALUE].toString();
    this.secondValueInput.disabled = false;
  } else {
    this.firstValueInput.value = value[FIRST_VALUE].toString();
    this.secondValueInput.disabled = true;
  }
  this.stepInput.value = step.toString();
  this.isRange.checked = isRange;
  this.isVertical.checked = direction === Directions.vertical;
  this.hasFill.checked = hasFill;
  this.hasTips.checked = hasTips;
  this.hasScale.checked = hasScale;
  this.isDecimal.checked = isDecimal;
}

export default initializePanelsParams;
