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
	} else {
		this.firstValueInput?.val(
			Array.isArray(params.value) ? params.value[0] : params.value
		);
		this.secondValueInput!.attr("disabled", "disabled");
	}

	this.stepInput?.val(params.step);
};

export default initializeFormValues;
