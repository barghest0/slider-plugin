import Panel from "../Panel";

const initializeInputs = function (this: Panel, sliderClass: string) {
	const panel = $(`${sliderClass}_panel`);
	this.minValueInput = panel.find(".js-input__min-value");
	this.maxValueInput = panel.find(".js-input__max-value");
	this.firstValueInput = panel.find(".js-input__first-value");
	this.secondValueInput = panel.find(".js-input__second-value");
	this.stepInput = panel.find(".js-input__step");
	this.isRange = panel.find('.js-checkbox__is-range');
	this.isVertical = panel.find('.js-checkbox__vertical');
	this.hasFill = panel.find('.js-checkbox__fill');
	this.hasTips = panel.find('.js-checkbox__tips');

};
export default initializeInputs;
