const handleDrag = function (e: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) {
	const { thisThumb, stance } = e.data;
	let offset = thisThumb.offset;
	let direction = thisThumb.view.direction;
	let cursorDirection =
		direction === "horizontal"
			? e.pageX || e.touches![0].pageX
			: e.pageY || e.touches![0].pageY;

	let cursorOffset =
		((cursorDirection! -
			(direction === "horizontal"
				? $(thisThumb.view.root).position().left
				: $(thisThumb.view.root).position().top)) /
			thisThumb.view.size) *
		100;

	if (direction === "vertical") {
		cursorOffset = 100 - cursorOffset;
	}

	thisThumb.notify("UpdateThumbModelValue", stance, cursorOffset);
	if (thisThumb.view.isRange) {
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
	}

	$(`${thisThumb.view.root} .slider__thumb-${stance}`).css({
		[thisThumb.view.offsetDirection]:
			(direction === "horizontal"
				? offset[stance]
				: 100 - offset[stance]) + "%",
	});

	thisThumb.view.tipView.updateTipsPosition(stance);
	thisThumb.view.trackView.notify("UpdateTrackModelFill");

	if (thisThumb.view.isRange) {
		$(`${thisThumb.view.root} .slider__fill_${direction}`).css({
			[thisThumb.view.offsetDirection]:
				thisThumb.view.fillView.offset + "px",
			[thisThumb.view.fillDirection]: thisThumb.view.fillView.size + "px",
		});
	} else {
		$(`${thisThumb.view.root} .slider__fill_${direction}`).css({
			[thisThumb.view.fillDirection]: offset[stance] + "%",
		});
	}
};

export default handleDrag;
