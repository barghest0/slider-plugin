import Track from "../Track";

const handleClick = function (e: JQuery.MouseDownEvent) {
	const { thisTrack } = e.data;
	let stance;
	let offset = thisTrack.parentElement.thumbView.offset;
	let direction = thisTrack.parentElement.direction;
	let cursorDirection = direction === "horizontal" ? e.pageX : e.pageY;

	let dragDirection = direction === "horizontal" ? "left" : "top";
	let cursorOffset =
		((cursorDirection -
			(direction === "horizontal"
				? $(".slider").position().left
				: $(".slider").position().top)) /
			thisTrack.parentElement.size) *
		100;

	if (cursorOffset > offset[1] && thisTrack.parentElement.isRange) {
		stance = 1;
	} else {
		stance = 0;
	}

	thisTrack.notify("UpdateThumbModelState", stance, cursorOffset);

	$(`.slider__thumb-${stance}`).css({
		left: offset[stance] + "%",
	});

	thisTrack.parentElement.tipView.updateTipsPosition(stance, dragDirection);
	thisTrack.notify("UpdateTrackModelState");

	$(`.slider__fill-${thisTrack.parentElement.direction}`).css({
		width: thisTrack.parentElement.fillView.size + "px",
		left: thisTrack.parentElement.fillView.offset + "px",
	});
};

export default handleClick;
