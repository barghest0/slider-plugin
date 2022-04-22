import Panel from '../Panel';

import {
  FIRST_VALUE,
  SECOND_VALUE,
} from '../../../components/Slider/constants';
import { Directions, SliderParams } from '../../../components/Slider/types';

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
  }: SliderParams = this.slider.getParams();

  this.inputs.minValueInput.value = min.toString();
  this.inputs.maxValueInput.value = max.toString();
  this.inputs.decimalPlacesInput.value = decimalPlaces.toString();
  if (isRange) {
    this.inputs.firstValueInput.value = value[FIRST_VALUE].toString();
    this.inputs.secondValueInput.value = value[SECOND_VALUE].toString();
    this.inputs.secondValueInput.disabled = false;
  } else {
    this.inputs.firstValueInput.value = value[FIRST_VALUE].toString();
    this.inputs.secondValueInput.disabled = true;
  }
  this.inputs.stepInput.value = step.toString();
  this.inputs.isRange.checked = isRange;
  this.inputs.isVertical.checked = direction === Directions.vertical;
  this.inputs.hasFill.checked = hasFill;
  this.inputs.hasTips.checked = hasTips;
  this.inputs.hasScale.checked = hasScale;
  this.inputs.isDecimal.checked = isDecimal;
}

export default initializePanelsParams;
