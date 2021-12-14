import { IThumbCoords } from "../../../../utils/interfaces/interfaces"
import Thumb from "../Thumb"

const changePosition = function (e: JQuery.MouseMoveEvent) {
	const { thumbCoords, thisThumb } = e.data


	let value = thisThumb.parentElement.value

	let left =
		((e.pageX - thumbCoords.x) / thisThumb.parentElement.size.width) * 100
	let top =
		((e.pageY - thumbCoords.y) / thisThumb.parentElement.size.height) * 100

	if (left < 0) left = 0
	if (left > 100) left = 100

	let stepLeft =
		Math.round(left / thisThumb.stepPercent) * thisThumb.stepPercent

	let stepTop =
		Math.round(top / thisThumb.stepPercent) * thisThumb.stepPercent




	let x = (stepLeft / 100) * thisThumb.parentElement.size.width
	let y = (stepLeft / 100) * thisThumb.parentElement.size.height



	if (stepLeft < 0) stepLeft = 0
	if (stepLeft > 100) stepLeft = 100
	let result


	if (thisThumb.parentElement.direction === "horizontal") {
		result = (
			(stepLeft / thisThumb.stepPercent) *
			thisThumb.step
		).toFixed()

		$(".slider__thumb").css({
			left: value / (thisThumb.parentElement.ends.max / 100) + "%",
		})
		$(".slider__fill").css({
			width: value / (thisThumb.parentElement.ends.max / 100) + "%",
		})

	} else {
		result = (
			(stepTop / thisThumb.stepPercent) *
			thisThumb.step
		).toFixed()
		$(".slider__thumb").css({
			top: value / (thisThumb.parentElement.ends.max / 100) + "%",
		})
		$(".slider__fill").css({
			height: value / (thisThumb.parentElement.ends.max / 100) + "%",
		})
	}



	thisThumb.parentElement.notify(
		"UpdateModelState",
		Number(result),
		x,
		thumbCoords.y
	)
}

export default changePosition
