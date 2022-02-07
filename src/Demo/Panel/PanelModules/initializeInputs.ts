import Panel from '../Panel';

const initializeInputs = function initializeInputs(this: Panel, root: string) {
	const panel = <HTMLElement>document.querySelector(`${root}__panel`);

	this.minValueInput = <HTMLInputElement>panel.querySelector('.js-input__min-value');
	this.maxValueInput = <HTMLInputElement>panel.querySelector('.js-input__max-value');
	this.firstValueInput = <HTMLInputElement>panel.querySelector('.js-input__first-value');
	this.secondValueInput = <HTMLInputElement>panel.querySelector('.js-input__second-value');
	this.decimalPlacesInput = <HTMLInputElement>panel.querySelector('.js-input__decimal-places');

	this.stepInput = <HTMLInputElement>panel.querySelector('.js-input__step');
	this.isRange = <HTMLInputElement>panel.querySelector('.js-checkbox__is-range');
	this.isVertical = <HTMLInputElement>panel.querySelector('.js-checkbox__vertical');
	this.hasFill = <HTMLInputElement>panel.querySelector('.js-checkbox__fill');
	this.hasTips = <HTMLInputElement>panel.querySelector('.js-checkbox__tips');
	this.hasScale = <HTMLInputElement>panel.querySelector('.js-checkbox__scale');
	this.isDecimal = <HTMLInputElement>panel.querySelector('.js-checkbox__decimal');
};
export default initializeInputs;
