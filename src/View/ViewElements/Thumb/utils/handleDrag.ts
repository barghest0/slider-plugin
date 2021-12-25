const handleDrag = function (e: JQuery.MouseMoveEvent) {
	const { thisThumb, stance } = e.data;
	let offset = thisThumb.offset;
	let direction = thisThumb.parentElement.direction;
	let cursorDirection = direction === "horizontal" ? e.pageX : e.pageY;
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";
	let thumbsOffset =
		direction === "horizontal" ? offset[stance] : 100 - offset[stance];

	let cursorOffset =
		((cursorDirection -
			(direction === "horizontal"
				? $(".slider").position().left
				: $(".slider").position().top)) /
			thisThumb.parentElement.size) *
		100;

	thisThumb.notify("UpdateThumbModelState", stance, cursorOffset);

	if (stance === 0) {
		if (offset[0] + thisThumb.stepPercent >= offset[1]) {
			offset[0] = offset[1] - thisThumb.stepPercent;
			thisThumb.value[0] = thisThumb.value[1] - thisThumb.step;
		}
	} else {
		if (offset[1] - thisThumb.stepPercent <= offset[0]) {
			offset[1] = offset[0] + thisThumb.stepPercent;
			thisThumb.value[1] = thisThumb.value[0] + thisThumb.step;
		}
	}

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: offset[stance] + "%",
	});

	thisThumb.parentElement.tipView.updateTipsPosition(stance, dragDirection);
	thisThumb.parentElement.trackView.notify("UpdateTrackModelState");

	if (thisThumb.parentElement.isRange) {
		$(`.slider__fill-${direction}`).css({
			[dragDirection]: thisThumb.parentElement.fillView.offset + "px",
			[fillDirection]: thisThumb.parentElement.fillView.size + "px",
		});
	} else {
		$(`.slider__fill-${direction}`).css({
			[fillDirection]: thumbsOffset + "%",
		});
	}
};

export default handleDrag;
