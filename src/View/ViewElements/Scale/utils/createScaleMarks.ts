import { Direction, Directions } from '../../../../utils/interfaces';
import Scale from '../Scale';
import prepareScaleData from './prepareScaleData';

function createScaleMarks(
	this: Scale,
	step: number,
	max: number,
	min: number,
	direction: Direction,
) {
	const scaleData = prepareScaleData(min, max, step);
	if (direction === Directions.vertical) {
		scaleData.values.reverse();
		scaleData.offsets.reverse();
	}

	for (let i = 0; i < scaleData.values.length; i += 1) {
		const mark = document.createElement('div');
		mark.classList.add('slider__scale-mark');
		mark.classList.add(`slider__scale-mark_${direction}`);
		mark.dataset.testid = 'test-scale-mark';

		const offset =
			this.view.direction === Directions.horizontal
				? scaleData.offsets[i]
				: Math.abs(100 - scaleData.offsets[i]);

		mark.style[this.view.offsetDirection] = `${offset}%`;

		const number = document.createElement('div');
		number.classList.add('slider__scale-number');
		number.classList.add(`slider__scale-number_${direction}`);
		number.innerHTML = scaleData.values[i].toString();
		mark.appendChild(number);
		this.scale.appendChild(mark);
	}
}

export default createScaleMarks;
