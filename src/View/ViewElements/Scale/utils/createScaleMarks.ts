import { Direction } from '../../../../utils/interfaces';
import Scale from '../Scale';
import { prepareScaleData } from './prepareScaleData';

const createScaleMarks = function (
	this: Scale,
	step: number,
	max: number,
	min: number,
	direction: Direction,
) {
	const values = prepareScaleData(min, max, step);
	if (direction === 'vertical') values.reverse();

	for (let i = 0; i < values.length; i++) {
		const mark = document.createElement('div');
		mark.classList.add('slider__scale-mark');
		mark.classList.add(`slider__scale-mark_${direction}`);
		mark.dataset.testid = 'test-scale-mark';

		const number = document.createElement('div');
		number.classList.add('slider__scale-number');
		number.classList.add(`slider__scale-number_${direction}`);
		number.innerHTML = values[i].toString();
		mark.appendChild(number);
		this.scale.appendChild(mark);
	}
};

export default createScaleMarks;
