import calculateCursorCoordinate from "../../../ViewModules/calculateCursorCoordinate";
import Track from "../Track";

const handleClick = function (
	e: JQuery.MouseDownEvent | JQuery.TouchMoveEvent
) {
	const { thisTrack } = e.data as { thisTrack: Track; };
	let direction = thisTrack.view.direction;
	let coord = direction === "horizontal" ? (e.pageX || e.touches![0].pageX) : (e.pageY || e.touches![0].pageY);
	let cursorCoordinate = thisTrack.view.calculateCursorCoordinate(
		coord,
		direction,
		thisTrack.view.root,
		thisTrack.view.size
	);
	thisTrack.view.trackView.notify("UpdateThumbModelBeforeTrackClick", cursorCoordinate);
	thisTrack.notify("UpdateTrackModelFill", direction);
};

export default handleClick;
