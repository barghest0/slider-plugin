import { ISliderParams } from "../../../Interfaces/interfaces";
import Panel from "../Panel";
const initializeFormValues = function (this: Panel, params: ISliderParams) {
	this.minValueInput?.val(params.min);
	this.maxValueInput?.val(params.max);

	if (params.isRange) {
		this.firstValueInput?.val(
			Array.isArray(params.value) ? params.value[0] : ""
		);
		this.secondValueInput?.val(
			Array.isArray(params.value) ? params.value[1] : ""
		);
		this.secondValueInput!.prop("disabled", false);
	} else {
		this.firstValueInput?.val(
			Array.isArray(params.value) ? params.value[0] : params.value
		);
		this.secondValueInput!.prop("disabled", true);
	}
	this.stepInput?.val(params.step);
	this.isRange?.prop("checked", params.isRange);
	this.isVertical?.prop("checked", params.direction === "vertical");
	this.hasFill?.prop("checked", params.hasFill);
	this.hasTips?.prop("checked", params.hasTips);
};

export default initializeFormValues;
