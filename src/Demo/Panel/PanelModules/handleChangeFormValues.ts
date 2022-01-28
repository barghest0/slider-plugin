import Panel from '../Panel';
import handleChange from './handleChange';

const handleChangeFormValues = function (this: Panel) {
	this.minValueInput!.addEventListener('change', (e) => handleChange.call(this, e, 'min'));
	this.maxValueInput!.addEventListener('change', (e) => handleChange.call(this, e, 'max'));
	this.firstValueInput!.addEventListener('change', (e) => handleChange.call(this, e, 'value', 0));
	this.secondValueInput!.addEventListener('change', (e) => handleChange.call(this, e, 'value', 1));
	this.stepInput!.addEventListener('change', (e) => handleChange.call(this, e, 'step'));
	this.isRange!.addEventListener('change', (e) => handleChange.call(this, e, 'isRange'));
	this.isVertical!.addEventListener('change', (e) => handleChange.call(this, e, 'direction'));
	this.hasFill!.addEventListener('change', (e) => handleChange.call(this, e, 'hasFill'));
	this.hasTips!.addEventListener('change', (e) => handleChange.call(this, e, 'hasTips'));
};

export default handleChangeFormValues;
