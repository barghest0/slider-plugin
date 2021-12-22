const changePosition = function (e: JQuery.MouseMoveEvent) {
	const { thisThumb, stance } = e.data;
	let offset = thisThumb.offset;
	let direction = thisThumb.parentElement.direction;
	let cursorDirection = direction === "horizontal" ? e.pageX : e.pageY;
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";

	thisThumb.notify("UpdateThumbModelState", stance, cursorDirection);
	thisThumb.parentElement.trackView.notify("UpdateTrackModelState");

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: offset[stance] + "%",
	});

	if (thisThumb.parentElement.isRange) {
		$(`.slider__fill-${direction}`).css({
			[dragDirection]: thisThumb.parentElement.fillView.offset + "px",
			[fillDirection]: thisThumb.parentElement.fillView.width + "px",
		});
	} else {
		$(`.slider__fill-${direction}`).css({
			[fillDirection]: offset[stance] + "%",
		});
	}
};

export default changePosition;
