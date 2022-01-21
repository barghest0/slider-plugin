import calculateCursorCoordinate from '../../../ViewModules/calculateCursorCoordinate';
import updateFill from '../../Fill/utils/updateFill';
import updateThumbPosition from '../../Thumb/utils/updateThumbPosition';
import Track from "../Track";

const handleClick = function (e: JQuery.MouseDownEvent | JQuery.TouchMoveEvent) {
	const { thisTrack } = e.data;
	let offset = thisTrack.view.thumbView.offset;
	let direction = thisTrack.view.direction;
	let stance = 0;
	let cursorCoordinate = calculateCursorCoordinate(e, direction, thisTrack.view.root);

	thisTrack.view.trackView.notify("UpdateThumbModelBeforeTrackClick", cursorCoordinate);

	stance = thisTrack.view.thumbView.activeStance;
	
	updateThumbPosition.call(thisTrack, stance, offset);

	thisTrack.notify("UpdateTrackModelFill", direction);

	updateFill.call(thisTrack.view.fillView, direction);

};

export default handleClick;
