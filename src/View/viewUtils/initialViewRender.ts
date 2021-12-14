import { Direction } from '../../utils/interfaces/interfaces'
import View from "../View"

const initialViewRender = function (this: View, direction: Direction) {
	if (direction === 'horizontal') {

		$(".slider__thumb").css({
			left: this.value / (this.ends.max / 100) + "%",
		})
		$(".slider__fill").css({
			width: this.value / (this.ends.max / 100) + "%",
		})
	} else {
		$(".slider__thumb").css({
			top: this.value / (this.ends.max / 100) + "%",
		})
		$(".slider__fill").css({
			height: this.value / (this.ends.max / 100) + "%",
		})
	}

}

export default initialViewRender
