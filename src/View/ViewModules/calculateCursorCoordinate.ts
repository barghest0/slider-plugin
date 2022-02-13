import { Direction, Directions } from '../../utils/interfaces';

function calculateCursorCoordinate(
	coord: number,
	direction: Direction,
	DOMroot: HTMLElement,
	size: number,
) {
	if (direction === Directions.horizontal) {
		return ((coord - DOMroot.offsetLeft) / size) * 100;
	}
	return ((coord - DOMroot.offsetTop) / size) * 100;
}

export default calculateCursorCoordinate;
