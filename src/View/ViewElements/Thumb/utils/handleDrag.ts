import calculateCursorCoordinate from '../../../ViewModules/calculateCursorCoordinate';
import updateFill from '../../Fill/utils/updateFill';
import Thumb from '../Thumb';
import updateThumbPosition from './updateThumbPosition';
import validateCollision from "./validateCollision";
const handleDrag = function (e: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) {
	let { thisThumb, stance } = e.data as { thisThumb: Thumb, stance: number; };
	let offset = thisThumb.offset;
	let direction = thisThumb.view.direction;
	let cursorCoordinate = calculateCursorCoordinate(e, direction, thisThumb.view.root);
	stance = thisThumb.view.isRange ? validateCollision.call(thisThumb, stance) : stance;

	thisThumb.notify("UpdateThumbModel", stance, cursorCoordinate, direction, thisThumb.view.size);

	updateThumbPosition.call(thisThumb, stance, offset);

	thisThumb.view.trackView.notify("UpdateTrackModelFill", direction);

	updateFill.call(thisThumb.view.fillView, direction);

};

export default handleDrag;
