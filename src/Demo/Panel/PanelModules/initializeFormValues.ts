import { SliderParams } from "../../../GlobalUtils/interfaces";
import Panel from "../Panel";

const initializeFormValues = function (this: Panel, { min, max, value, isRange, step, direction, hasFill, hasTips, hasScale }: SliderParams) {
	
	this.minValueInput!.val(min);
	this.maxValueInput!.val(max);
	if (isRange) {
		this.firstValueInput!.val(
			value[0]
		);
		this.secondValueInput!.val(
			value[1]
		);
		this.secondValueInput!.prop("disabled", false);
	} else {
		this.firstValueInput!.val(
			value[0]
		);
		this.secondValueInput!.prop("disabled", true);
	}
	this.stepInput!.val(step);
	this.isRange!.prop("checked", isRange);
	this.isVertical!.prop("checked", direction === "vertical");
	this.hasFill!.prop("checked", hasFill);
	this.hasTips!.prop("checked", hasTips);
};

export default initializeFormValues;
