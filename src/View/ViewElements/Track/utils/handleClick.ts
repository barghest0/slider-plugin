import calculateCursorCoordinate from "../../../ViewModules/calculateCursorCoordinate";
import updateFill from "../../Fill/utils/updateFill";
import updateThumbPosition from "../../Thumb/utils/updateThumbPosition";
import Track from "../Track";

const handleClick = function (
	e: JQuery.MouseDownEvent | JQuery.TouchMoveEvent
) {
	const { thisTrack } = e.data;
	let direction = thisTrack.view.direction;
	let cursorCoordinate = calculateCursorCoordinate(
		e,
		direction,
		thisTrack.view.root
	);
	thisTrack.view.trackView.notify("UpdateThumbModelBeforeTrackClick", cursorCoordinate);
	thisTrack.notify("UpdateTrackModelFill", direction);
};

export default handleClick;
