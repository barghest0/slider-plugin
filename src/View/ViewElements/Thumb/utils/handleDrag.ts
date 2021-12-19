const changePosition = function (e: JQuery.MouseMoveEvent) {
	const { thisThumb, stance } = e.data
	let value = thisThumb.value
	// let coords = thisThumb.parentElement.coords
	let direction = thisThumb.parentElement.direction

	let left =
		((e.pageX - $(".slider").position().left) /
			thisThumb.parentElement.size.width) *
		100
	let top =
		((e.pageY - $(".slider").position().top) /
			thisThumb.parentElement.size.height) *
		100

	if (left < 0) left = 0
	if (left > 100) left = 100
	if (top < 0) top = 0
	if (top > 100) top = 100

	let stepLeft =
		Math.round(left / thisThumb.stepPercent) * thisThumb.stepPercent

	let stepTop =
		Math.round(top / thisThumb.stepPercent) * thisThumb.stepPercent

	let stepDirection = direction === "horizontal" ? stepLeft : stepTop
	let dragDirection = direction === "horizontal" ? "left" : "top"
	let fillDirection = direction === "horizontal" ? "width" : "height"

	let result =
		(stepDirection / thisThumb.stepPercent) * thisThumb.step.toFixed()


	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: value[stance] / (thisThumb.parentElement.ends.max / 100) + "%",
	})

	let deltaWidth =
		parseInt($(`.slider__thumb-1`).css(dragDirection), 10) -
		parseInt($(`.slider__thumb-0`).css(dragDirection), 10)
	let thumbOffset = parseInt($(`.slider__thumb-0`).css(dragDirection), 10)

	if (thisThumb.parentElement.isRange) {
		$(`.slider__fill-${direction}`).css({
			[dragDirection]: thumbOffset + "px",
			[fillDirection]: deltaWidth + "px",
		})
	} else {
		$(`.slider__fill-${direction}`).css({
			[fillDirection]:
				value[stance] / (thisThumb.parentElement.ends.max / 100) + "%",
		})
	}

	thisThumb.notify("UpdateThumbModelState", result, stance)
}

export default changePosition
