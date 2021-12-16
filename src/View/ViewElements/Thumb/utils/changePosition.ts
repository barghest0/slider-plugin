import { IThumbCoords } from "../../../../utils/interfaces/interfaces"
import Thumb from "../Thumb"

const changePosition = function (e: JQuery.MouseMoveEvent) {
	const { thumbCoords, thisThumb } = e.data

	

	let value = thisThumb.parentElement.value
	let direction = thisThumb.parentElement.direction
	
	let left =
		((e.pageX - thumbCoords.x) / thisThumb.parentElement.size.width) * 100
	let top =
		((e.pageY - thumbCoords.y) / thisThumb.parentElement.size.height) * 100

	if (left < 0) left = 0
	if (left > 100) left = 100
	if (top < 0) top = 0
	if (top > 100) top = 100
	
	let stepLeft =
		Math.round(left / thisThumb.stepPercent) * thisThumb.stepPercent

	let stepTop =
		Math.round(top / thisThumb.stepPercent) * thisThumb.stepPercent


	let x = (stepLeft / 100) * thisThumb.parentElement.size.width
	let y = (stepLeft / 100) * thisThumb.parentElement.size.height

	let stepDirection = direction === "horizontal" ? stepLeft : stepTop
	let dragDirection = direction === "horizontal" ? "left" : "top"
	let fillDirection = direction === "horizontal" ? "width" : "height"
	let result = (stepDirection / thisThumb.stepPercent) * thisThumb.step.toFixed()
	
	$(".slider__thumb").css({
		[dragDirection]: value / (thisThumb.parentElement.ends.max / 100) + "%",
	})
	$(".slider__fill").css({
		[fillDirection]: value / (thisThumb.parentElement.ends.max / 100) + "%",
	})

	thisThumb.parentElement.notify(
		"UpdateModelState",
		Number(result),
		x,
		y
	)
}

export default changePosition
