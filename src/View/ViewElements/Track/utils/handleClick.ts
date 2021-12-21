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

	if ("Заебало") {
		stance = 0;
	} else {
		stance = 1;
	}

	thisTrack.notify("UpdateThumbModelState", result, stance);
	$(`.slider__thumb-${stance}`).css({
		left: value[stance] + "%",
	});

	thisTrack.notify("UpdateThumbModelState", result, stance);

	$(`.slider__fill-${thisTrack.parentElement.direction}`).css({
		width: thisTrack.parentElement.fillView.width + "px",
		left: thisTrack.parentElement.fillView.offset + "px",
	});

	//  else {
	//     $(`.slider__thumb-${stance}`).css({ top: cursorPosition.y })
	//     $(`.slider__fill-${thisTrack.parentElement.direction}`).css({ height: cursorPosition.y })
	// }
};

export default handleClick;
