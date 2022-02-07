import { FIRST_VALUE, SECOND_VALUE } from '../../../utils/constants';
import Panel from '../Panel';
import handleChange from './handleChange';

const addInputListeners = function (this: Panel) {
	this.minValueInput.addEventListener('change', e => handleChange.call(this, e, 'min'));
	this.maxValueInput.addEventListener('change', e => handleChange.call(this, e, 'max'));
	this.firstValueInput.addEventListener('change', e =>
		handleChange.call(this, e, 'value', FIRST_VALUE),
	);

	this.secondValueInput.addEventListener('change', e =>
		handleChange.call(this, e, 'value', SECOND_VALUE),
	);
	this.decimalPlacesInput.addEventListener('change', e =>
		handleChange.call(this, e, 'decimalPlaces'),
	);
	this.stepInput.addEventListener('change', e => handleChange.call(this, e, 'step'));
	this.isRange.addEventListener('change', e => handleChange.call(this, e, 'isRange'));
	this.isVertical.addEventListener('change', e => handleChange.call(this, e, 'direction'));
	this.hasFill.addEventListener('change', e => handleChange.call(this, e, 'hasFill'));
	this.hasTips.addEventListener('change', e => handleChange.call(this, e, 'hasTips'));
	this.hasScale.addEventListener('change', e => handleChange.call(this, e, 'hasScale'));
	this.isDecimal.addEventListener('change', e => handleChange.call(this, e, 'isDecimal'));
};

export default addInputListeners;
