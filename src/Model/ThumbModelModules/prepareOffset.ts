import { MAX_OFFSET } from '../../utils/constants';
import { Direction } from '../../utils/interfaces';

function prepareOffset(offset: number, direction: Direction) {
	return direction === 'horizontal' ? offset : MAX_OFFSET - offset;
}

export default prepareOffset;
