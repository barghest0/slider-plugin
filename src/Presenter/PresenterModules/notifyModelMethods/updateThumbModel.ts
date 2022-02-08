import { Direction } from '../../../utils/interfaces';
import Presenter from '../../Presenter';

function updateThumbModel(
	this: Presenter,
	stance: number,
	cursorOffset: number,
	direction: Direction,
) {
	this.thumbs[stance].updateThumbValue(stance, this.view.ends, cursorOffset, direction);
}

export default updateThumbModel;
