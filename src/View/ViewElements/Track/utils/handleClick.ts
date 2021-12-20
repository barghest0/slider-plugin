import Track from "../Track";

const handleClick = function (e: JQuery.MouseDownEvent) {
	const { thisTrack } = e.data;
	let stance;

	let value = thisTrack.parentElement.thumbView.value;

	let left =
		((e.pageX - $(".slider").position().left) /
			thisTrack.parentElement.size.width) *
		100;

	let stepLeft =
		Math.round(left / thisTrack.parentElement.thumbView.stepPercent) *
		thisTrack.parentElement.thumbView.stepPercent;

	let result =
		(stepLeft / thisTrack.parentElement.thumbView.stepPercent) *
		thisTrack.parentElement.thumbView.step.toFixed();
	if (e.offsetX >= $(".slider").width()! / 2) {
		stance = 1;
	} else {
		stance = 0;
	}

	thisTrack.notify("UpdateThumbModelState", result, stance);
	$(`.slider__thumb-${stance}`).css({
		left: value[stance] / (thisTrack.parentElement.ends.max / 100) + "%",
	});

	thisTrack.notify("UpdateThumbModelState", result, stance);
	let thumbOffset = parseInt($(`.slider__thumb-0`).css("left"), 10);

	$(`.slider__fill-${thisTrack.parentElement.direction}`).css({
		width: thisTrack.parentElement.fillView.width + "px",
		left: thumbOffset + "px",
	});

	//  else {
	//     $(`.slider__thumb-${stance}`).css({ top: cursorPosition.y })
	//     $(`.slider__fill-${thisTrack.parentElement.direction}`).css({ height: cursorPosition.y })
	// }
};

export default handleClick;
