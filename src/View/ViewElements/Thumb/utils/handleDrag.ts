import calculateCursorCoordinate from '../../../ViewModules/calculateCursorCoordinate';
import Thumb from '../Thumb';
const handleDrag = function (e: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) {
	let { thisThumb, stance } = e.data as { thisThumb: Thumb, stance: number; };
	let direction = thisThumb.view.direction;
	let cursorCoordinate = calculateCursorCoordinate(e, direction, thisThumb.view.root, thisThumb.view.size);
	stance = thisThumb.view.isRange ? thisThumb.validateCollision(stance) : stance;

	thisThumb.notify("UpdateThumbModel", stance, cursorCoordinate, direction, thisThumb.view.size);
	thisThumb.view.trackView.notify("UpdateTrackModelFill", direction);

};

export default handleDrag;
