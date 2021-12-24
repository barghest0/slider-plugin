import Track from "../Track";

const handleClick = function (e: JQuery.MouseDownEvent) {
	const { thisTrack } = e.data;
	let stance;
	let offset = thisTrack.parentElement.thumbView.offset;
	let direction = thisTrack.parentElement.direction;
	let cursorDirection = direction === "horizontal" ? e.pageX : e.pageY;
	let cursorOffset =
		((cursorDirection - $(".slider").position().left) /
			thisTrack.parentElement.size) *
		100;

	if (cursorOffset < offset[0]) {
		stance = 0;
	} else {
		stance = 1;
	}
	thisTrack.notify("UpdateThumbModelState", stance, cursorDirection);

	$(`.slider__thumb-${stance}`).css({
		left: offset[stance] + "%",
	});

	thisTrack.notify("UpdateTrackModelState");
	thisTrack.notify("UpdateThumbModelState", stance, cursorDirection);

	$(`.slider__fill-${thisTrack.parentElement.direction}`).css({
		width: thisTrack.parentElement.fillView.size + "px",
		left: thisTrack.parentElement.fillView.offset + "px",
	});

	//  else {
	//     $(`.slider__thumb-${stance}`).css({ top: cursorPosition.y })
	//     $(`.slider__fill-${thisTrack.parentElement.direction}`).css({ height: cursorPosition.y })
	// }
};

export default handleClick;
