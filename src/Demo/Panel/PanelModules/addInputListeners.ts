import { FIRST_VALUE, SECOND_VALUE } from '../../../utils/constants';
import { Params } from '../../../utils/interfaces';
import Panel from '../Panel';
import handleChange from './handleChange';

function addInputListeners(this: Panel) {
	this.minValueInput.addEventListener('change', event =>
		handleChange.call(this, event, Params.min),
	);
	this.maxValueInput.addEventListener('change', event =>
		handleChange.call(this, event, Params.max),
	);
	this.firstValueInput.addEventListener('change', event =>
		handleChange.call(this, event, Params.value, FIRST_VALUE),
	);

	this.secondValueInput.addEventListener('change', event =>
		handleChange.call(this, event, Params.value, SECOND_VALUE),
	);
	this.decimalPlacesInput.addEventListener('change', event =>
		handleChange.call(this, event, Params.decimalPlaces),
	);
	this.stepInput.addEventListener('change', event => handleChange.call(this, event, Params.step));

	this.isRange.addEventListener('change', event => handleChange.call(this, event, Params.isRange));
	this.isVertical.addEventListener('change', event =>
		handleChange.call(this, event, Params.direction),
	);
	this.hasFill.addEventListener('change', event => handleChange.call(this, event, Params.hasFill));
	this.hasTips.addEventListener('change', event => handleChange.call(this, event, Params.hasTips));
	this.hasScale.addEventListener('change', event =>
		handleChange.call(this, event, Params.hasScale),
	);
	this.isDecimal.addEventListener('change', event =>
		handleChange.call(this, event, Params.isDecimal),
	);
}

export default addInputListeners;
