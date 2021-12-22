const handleDrag = function (e: JQuery.MouseMoveEvent) {
	const { thisThumb, stance } = e.data;
	let offset = thisThumb.offset;
	let direction = thisThumb.parentElement.direction;
	let cursorDirection = direction === "horizontal" ? e.pageX : e.pageY;
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";

	thisThumb.notify("UpdateThumbModelState", stance, cursorDirection);
	thisThumb.parentElement.trackView.notify("UpdateTrackModelState");

	if (offset[0] + thisThumb.stepPercent > offset[1]) {
		offset[0] = offset[1] - thisThumb.stepPercent;
		thisThumb.value[0] = thisThumb.value[1] - thisThumb.step;
	}

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: offset[stance] + "%",
	});

	thisThumb.parentElement.trackView.notify("UpdateTrackModelState");

	if (thisThumb.parentElement.isRange) {
		$(`.slider__fill-${direction}`).css({
			[dragDirection]: thisThumb.parentElement.fillView.offset + "px",
			[fillDirection]: thisThumb.parentElement.fillView.size + "px",
		});
	} else {
		$(`.slider__fill-${direction}`).css({
			[fillDirection]: offset[stance] + "%",
		});
	}
};

export default handleDrag;
