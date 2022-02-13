import Panel from '../Panel';

function initializeInputs(this: Panel, root: string) {
	const panel = <HTMLElement>document.querySelector(`${root}__panel`);

	this.minValueInput = <HTMLInputElement>panel.querySelector('.js-min-value');
	this.maxValueInput = <HTMLInputElement>panel.querySelector('.js-max-value');
	this.firstValueInput = <HTMLInputElement>panel.querySelector('.js-first-value');
	this.secondValueInput = <HTMLInputElement>panel.querySelector('.js-second-value');
	this.decimalPlacesInput = <HTMLInputElement>panel.querySelector('.js-decimal-places');
	this.stepInput = <HTMLInputElement>panel.querySelector('.js-step');

	this.isRange = <HTMLInputElement>panel.querySelector('.js-is-range');
	this.isVertical = <HTMLInputElement>panel.querySelector('.js-vertical');
	this.hasFill = <HTMLInputElement>panel.querySelector('.js-fill');
	this.hasTips = <HTMLInputElement>panel.querySelector('.js-tips');
	this.hasScale = <HTMLInputElement>panel.querySelector('.js-scale');
	this.isDecimal = <HTMLInputElement>panel.querySelector('.js-decimal');
}
export default initializeInputs;
