import calculateCursorCoordinate from '../../../ViewModules/calculateCursorCoordinate';
import Thumb from '../Thumb';
const handleDrag = function (e: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) {
	let { thisThumb, stance } = e.data as { thisThumb: Thumb, stance: number; };
	let direction = thisThumb.view.direction;
	let coord = direction === "horizontal" ? (e.pageX || e.touches![0].pageX) : (e.pageY || e.touches![0].pageY);
	let cursorCoordinate = thisThumb.view.calculateCursorCoordinate(coord, direction, thisThumb.view.root, thisThumb.view.size);
	stance = thisThumb.view.isRange ? thisThumb.validateCollision(stance) : stance;

	thisThumb.notify("UpdateThumbModel", stance, cursorCoordinate, direction, thisThumb.view.size);
	thisThumb.view.trackView.notify("UpdateTrackModelFill", direction);

};

export default handleDrag;
