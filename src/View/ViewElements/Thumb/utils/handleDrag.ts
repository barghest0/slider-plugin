const changePosition = function (e: JQuery.MouseMoveEvent) {
	const { thisThumb, stance } = e.data;
	const thumbCoords = thisThumb.coords;
	let value = thisThumb.value;
	let direction = thisThumb.parentElement.direction;

	let left =
		((e.pageX - thumbCoords.x) / thisThumb.parentElement.size.width) * 100;
	let top =
		((e.pageY - thumbCoords.y) / thisThumb.parentElement.size.height) * 100;

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

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: value / (thisThumb.parentElement.ends.max / 100) + "%",
	});

	$(".slider__fill").css({
		[fillDirection]: value / (thisThumb.parentElement.ends.max / 100) + "%",
	});

	thisThumb.notify("UpdateThumbModelState", Number(result), stance);
};

export default changePosition;
