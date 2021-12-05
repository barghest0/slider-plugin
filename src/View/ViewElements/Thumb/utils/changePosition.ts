import { IThumbCoords } from "../../../../utils/interfaces/interfaces";
import Thumb from "../Thumb";

const changePosition = function (e: JQuery.MouseMoveEvent) {
	const { thumbCoords, thisThumb } = e.data;

	let left =
		((e.pageX - thumbCoords.x) / thisThumb.parentElement.width) * 100;
	if (left < 0) left = 0;
	if (left > 100) left = 100;
	let stepLeft: number =
		Math.round(left / thisThumb.stepPercent) * thisThumb.stepPercent;
	if (stepLeft < 0) stepLeft = 0;
	if (stepLeft > 100) stepLeft = 100;
	$(".slider__thumb").css({ left: stepLeft + "%" });
	$(".slider__fill").css({ width: stepLeft + "%" });
	let result = (
		(stepLeft / thisThumb.stepPercent) *
		thisThumb.step
	).toFixed();

	thisThumb.parentElement.notify(
		"UpdateModelState",
		Number(result),
		stepLeft,
		thumbCoords.y
	);
};

export default changePosition;
