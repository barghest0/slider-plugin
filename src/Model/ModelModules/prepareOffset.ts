import { MAX_OFFSET } from '../../utils/constants';
import { Directions } from '../../utils/interfaces';
import Model from '../Model';

function prepareOffset(this: Model, offset: number): number {
	const { direction } = this.params;
	return direction === Directions.horizontal ? offset : MAX_OFFSET - offset;
}

export default prepareOffset;
