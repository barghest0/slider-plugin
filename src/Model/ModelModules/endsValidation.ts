import { MAX_OFFSET, MIN_OFFSET } from '../../utils/constants';
import { Directions } from '../../utils/interfaces';
import Model from '../Model';

function endsValidation(this: Model, stance: number, offset: number) {
	const { min, max, direction } = this.params;
	if (offset > MAX_OFFSET) {
		this.setOffset(stance, MAX_OFFSET);
		this.setValue(stance, direction === Directions.horizontal ? max : min);
	}
	if (offset < MIN_OFFSET) {
		this.setOffset(stance, MIN_OFFSET);
		this.setValue(stance, direction === Directions.horizontal ? min : max);
	}
}

export default endsValidation;
