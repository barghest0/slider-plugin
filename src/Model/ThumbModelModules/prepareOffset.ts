import { MAX_OFFSET } from '../../utils/constants';
import { Direction, Directions } from '../../utils/interfaces';

function prepareOffset(offset: number, direction: Direction) {
	return direction === Directions.horizontal ? offset : MAX_OFFSET - offset;
}

export default prepareOffset;
