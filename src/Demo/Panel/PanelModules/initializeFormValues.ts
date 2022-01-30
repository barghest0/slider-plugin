import { SliderParams } from '../../../utils/interfaces';
import Panel from '../Panel';

const initializeFormValues = function (this: Panel, {
  min, max, value, isRange, step, direction, hasFill, hasTips, hasScale,
}: SliderParams) {
	this.minValueInput!.value = min.toString();
	this.maxValueInput!.value = max.toString();
	if (isRange) {
		this.firstValueInput!.value = value[0].toString();
		this.secondValueInput!.value = value[1].toString();
		this.secondValueInput!.disabled = false;
	} else {
		this.firstValueInput!.value = value[0].toString();
		this.secondValueInput!.disabled = true;
	}
	this.stepInput!.value = step.toString();
	this.isRange!.checked = isRange;
	this.isVertical!.checked = direction === 'vertical';
	this.hasFill!.checked = hasFill;
	this.hasTips!.checked = hasTips;
};

export default initializeFormValues;
