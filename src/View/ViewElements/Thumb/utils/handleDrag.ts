const changePosition = function (e: JQuery.MouseMoveEvent) {
	const { thisThumb, stance } = e.data;
	let value = thisThumb.value;
	// let coords = thisThumb.parentElement.coords
	let direction = thisThumb.parentElement.direction;

	let left =
		((e.pageX - $(".slider").position().left) /
			thisThumb.parentElement.size.width) *
		100;
	let top =
		((e.pageY - $(".slider").position().top) /
			thisThumb.parentElement.size.height) *
		100;

	if (left < 0) left = 0;
	if (left > 100) left = 100;
	if (top < 0) top = 0;
	if (top > 100) top = 100;

	let stepLeft =
		Math.round(left / thisThumb.stepPercent) * thisThumb.stepPercent;

	let stepTop =
		Math.round(top / thisThumb.stepPercent) * thisThumb.stepPercent;

	let stepDirection = direction === "horizontal" ? stepLeft : stepTop;
	let dragDirection = direction === "horizontal" ? "left" : "top";
	let fillDirection = direction === "horizontal" ? "width" : "height";

	let result =
		(stepDirection / thisThumb.stepPercent) * thisThumb.step.toFixed();

	thisThumb.notify("UpdateThumbModelState", result, stance);

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: value[stance] + "%",
	});

	thisThumb.notify("UpdateThumbModelState", result, stance);

	if (thisThumb.parentElement.isRange) {
		$(`.slider__fill-${direction}`).css({
			[dragDirection]: thisThumb.parentElement.fillView.offset + "px",
			[fillDirection]: thisThumb.parentElement.fillView.width + "px",
		});
	} else {
		$(`.slider__fill-${direction}`).css({
			[fillDirection]: value[stance] + "%",
		});
	}
};

export default changePosition;
