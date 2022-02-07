import { Direction } from '../../utils/interfaces';

const calculateCursorCoordinate = function (
	coord: number,
	direction: Direction,
	DOMroot: HTMLElement,
	size: number,
) {
	if (direction === 'horizontal') {
		return ((coord - DOMroot.offsetLeft) / size) * 100;
	}
	return ((coord - DOMroot.offsetTop) / size) * 100;
};

export default calculateCursorCoordinate;
