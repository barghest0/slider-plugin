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
    canThumbPush,
  }: SliderParams = this.slider.getParams();

  this.inputs.minValueInput.value = min.toString();
  this.inputs.stepInput.value = step.toString();
  this.inputs.maxValueInput.value = max.toString();
  if (isRange) {
    this.inputs.firstValueInput.value = value[FIRST_VALUE].toString();
    this.inputs.secondValueInput.value = value[SECOND_VALUE].toString();
    this.inputs.secondValueInput.disabled = false;
  } else {
    this.inputs.firstValueInput.value = value[FIRST_VALUE].toString();
    this.inputs.secondValueInput.disabled = true;
  }
  this.inputs.isRange.checked = isRange;
  this.inputs.isVertical.checked = direction === Directions.vertical;
  this.inputs.hasFill.checked = hasFill;
  this.inputs.canThumbPush.checked = canThumbPush;

  this.inputs.hasTips.checked = hasTips;
  this.inputs.hasScale.checked = hasScale;
}

export default initializePanelsParams;
