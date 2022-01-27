import calculateCursorCoordinate from "../../../ViewModules/calculateCursorCoordinate";
import Track from "../Track";

const handleClick = function (
	e: JQuery.MouseDownEvent | JQuery.TouchMoveEvent
) {
	const { thisTrack } = e.data as { thisTrack: Track; };
	let direction = thisTrack.view.direction;
	let coord = direction === "horizontal" ? e.clientX! : e.clientY!;
	let cursorCoordinate = thisTrack.view.calculateCursorCoordinate(
		coord,
		direction,
		thisTrack.view.root,
		thisTrack.view.size
	);

	thisTrack.notify("UpdateThumbModelBeforeTrackClick", cursorCoordinate);
	thisTrack.notify("UpdateTrackModelFill", direction);
};

export default handleClick;
