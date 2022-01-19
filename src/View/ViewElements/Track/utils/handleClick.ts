import Track from "../Track";

const handleClick = function (e: JQuery.MouseDownEvent) {
	const { thisTrack } = e.data;
	let stance = 0;
	let offset = thisTrack.view.thumbView.offset;
	let direction = thisTrack.view.direction;
	let cursorCoordinate = direction === "horizontal" ? e.pageX : e.pageY;

	thisTrack.notify("UpdateThumbModelValue", stance, cursorCoordinate, direction, thisTrack.view.size);

	$(`${thisTrack.view.root} .slider__thumb-${stance}`).css({
		[thisTrack.view.offsetDirection]:
			offset[stance] + "%",
	});

	thisTrack.view.tipView.updateTipsPosition(
		stance,
		thisTrack.view.offsetDirection
	);
	thisTrack.notify("UpdateTrackModelFill");

	$(`${thisTrack.view.root} .slider__fill_${thisTrack.view.direction}`).css({
		[thisTrack.view.fillDirection]: thisTrack.view.fillView.size + "px",
	});
	if (thisTrack.view.isRange) {
		$(
			`${thisTrack.view.root} .slider__fill_${thisTrack.view.direction}`
		).css({
			[thisTrack.view.offsetDirection]:
				thisTrack.view.fillView.offset + "px",
		});
	}
};

export default handleClick;
