import { Direction } from "../../Interfaces/interfaces"
import View from "../View"

const initialThumbsPlacement = function (
	this: View,
	direction: Direction,
	stance: number
) {
	let dragDirection = direction === "horizontal" ? "left" : "top"

	$(`.slider__thumb-${stance}`).css({
		[dragDirection]: `${this.thumbView.value / (this.ends.max / 100)}%`,
	})

}

export default initialThumbsPlacement
