import Track from "../Track";

const handleClick = function (e: JQuery.MouseDownEvent) {
	const { thisTrack } = e.data;
	let offset = thisTrack.view.thumbView.offset;
	let direction = thisTrack.view.direction;
	let cursorCoordinate =
		direction === "horizontal"
			? e.pageX - $(thisTrack.view.root).position().left
			: e.pageY - $(thisTrack.view.root).position().top;

	thisTrack.notify("UpdateThumbModelBeforeTrackClick", cursorCoordinate);

	let stance = thisTrack.view.thumbView.activeStance;

	$(`${thisTrack.view.root} .slider__thumb-${stance}`).css({
		[thisTrack.view.offsetDirection]: offset[stance] + "%",
	});

	thisTrack.notify("UpdateTrackModelFill", direction);

	$(`${thisTrack.view.root} .slider__fill_${thisTrack.view.direction}`).css({
		[thisTrack.view.fillDirection]: thisTrack.view.fillView.size + "%",
	});
	if (thisTrack.view.isRange) {
		$(
			`${thisTrack.view.root} .slider__fill_${thisTrack.view.direction}`
		).css({
			[thisTrack.view.offsetDirection]:
				thisTrack.view.fillView.offset + "%",
		});
	}
};

export default handleClick;
