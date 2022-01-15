import Track from "../Track";

const handleClick = function (e: JQuery.MouseDownEvent) {
	const { thisTrack } = e.data;
	let stance;
	let offset = thisTrack.view.thumbView.offset;
	let direction = thisTrack.view.direction;
	let cursorDirection = direction === "horizontal" ? e.pageX : e.pageY;
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";
	let cursorOffset =
		((cursorDirection -
			(direction === "horizontal"
				? $(thisTrack.view.root).position().left
				: $(thisTrack.view.root).position().top)) /
			thisTrack.view.size) *
		100;
	if (direction === "vertical") {
		cursorOffset = 100 - cursorOffset;
	}
	if (cursorOffset > offset[1] && thisTrack.view.isRange) {
		stance = 1;
	} else {
		stance = 0;
	}

	thisTrack.notify("UpdateThumbModelValue", stance, cursorOffset);

	$(`${thisTrack.view.root} .slider__thumb-${stance}`).css({
		[dragDirection]:
			(direction === "horizontal"
				? offset[stance]
				: 100 - offset[stance]) + "%",
	});

	thisTrack.view.tipView.updateTipsPosition(stance, dragDirection);
	thisTrack.notify("UpdateTrackModelFill");
	$(`${thisTrack.view.root} .slider__fill_${thisTrack.view.direction}`).css({
		[fillDirection]: thisTrack.view.fillView.size + "px",
	});
	if (thisTrack.view.isRange) {
		$(
			`${thisTrack.view.root} .slider__fill_${thisTrack.view.direction}`
		).css({
			[dragDirection]: thisTrack.view.fillView.offset + "px",
		});
	}
};

export default handleClick;
