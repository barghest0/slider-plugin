import validateCollision from './validateCollision';

const handleDrag = function (e: JQuery.MouseMoveEvent | JQuery.TouchMoveEvent) {
	let { thisThumb, stance } = e.data;
	let offset = thisThumb.offset;
	let direction = thisThumb.view.direction;
	let reverseStance = +!stance;
	let cursorCoordinate =
		direction === "horizontal"
			? e.pageX || e.touches![0].pageX
			: e.pageY || e.touches![0].pageY;


	if (validateCollision(offset, stance)) {
		stance = reverseStance;
	}

	thisThumb.notify("UpdateThumbModelValue", stance, cursorCoordinate, direction, thisThumb.view.size);


	$(`${thisThumb.view.root} .slider__thumb-${stance}`).css({
		[thisThumb.view.offsetDirection]: offset[stance] + "%",
	});


	thisThumb.view.trackView.notify("UpdateTrackModelFill");

	if (thisThumb.view.isRange) {
		$(`${thisThumb.view.root} .slider__fill_${direction}`).css({
			[thisThumb.view.offsetDirection]:
				thisThumb.view.fillView.offset + "px",
			[thisThumb.view.fillDirection]: thisThumb.view.fillView.size + "px",
		});
	} else {
		$(`${thisThumb.view.root} .slider__fill_${direction}`).css({
			[thisThumb.view.fillDirection]: thisThumb.view.fillView.size + "px",
		});
	}
};

export default handleDrag;
