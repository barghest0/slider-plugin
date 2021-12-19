import { Direction } from "../../Interfaces/interfaces"
import View from "../View"

const initialFillPlacement = function (this: View, direction: Direction) {
	let dragDirection = direction === "horizontal" ? "left" : "top"
	let fillDirection = direction === "horizontal" ? "width" : "height"

	let deltaWidth =
		parseInt($(`.slider__thumb-1`).css(dragDirection), 10) -
		parseInt($(`.slider__thumb-0`).css(dragDirection), 10)
	let thumbOffset = parseInt($(`.slider__thumb-0`).css(dragDirection), 10)

	if (this.isRange) {
		$(`.slider__fill-${direction}`).css({
			[dragDirection]: thumbOffset + "px",
			[fillDirection]: deltaWidth + "px",
		})
	} else {
		$(`.slider__fill-${direction}`).css({
			[fillDirection]: `${this.thumbView.value[0] / (this.ends.max / 100)
				} % `,
		})
	}
}

export default initialFillPlacement
