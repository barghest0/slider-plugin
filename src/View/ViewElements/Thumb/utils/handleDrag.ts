const changePosition = function (e: JQuery.MouseMoveEvent) {
	const { thisThumb, stance } = e.data;
	let offset = thisThumb.offset;
	let direction = thisThumb.parentElement.direction;

	let stepDirection = direction === "horizontal" ? offset : offset;
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";

	let result =
		(stepDirection / thisThumb.stepPercent) * thisThumb.step.toFixed();

	thisThumb.notify("UpdateThumbModelState", result, stance, e.pageX);
	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: offset[stance] + "%",
	});

	thisThumb.notify("UpdateThumbModelState", result, stance, e.pageX);

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
