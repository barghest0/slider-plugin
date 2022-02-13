import { MAX_OFFSET, MIN_OFFSET } from '../../utils/constants';
import { Direction, Directions, Ends } from '../../utils/interfaces';
import ThumbModel from '../ThumbModel';

function endsValidation(this: ThumbModel, ends: Ends, direction: Direction) {
	if (this.getOffset() > MAX_OFFSET) {
		this.setOffset(MAX_OFFSET);
		this.setValue(direction === Directions.horizontal ? ends.max : ends.min);
	}
	if (this.getOffset() < MIN_OFFSET) {
		this.setOffset(MIN_OFFSET);
		this.setValue(direction === Directions.horizontal ? ends.min : ends.max);
	}
}

export default endsValidation;
