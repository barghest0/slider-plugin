import { Direction } from "../../../utils/interfaces/interfaces"
import View from "../../View"

class Track {
	private parentElement: View
	public track: JQuery<HTMLElement>
	constructor(parentElement: View) {
		this.parentElement = parentElement
		this.track = $(".slider__track")
	}
	public createTrack(direction: Direction) {
		this.parentElement.parent.append(`<div class="slider__track slider__track-${direction}"></div>`)
	}
	public clickTrack() {
		this.parentElement.parent.on(
			"click",
			{ track: ".slider__track" },
			(e) => {
				const cursorPosition = {
					x: e.pageX - $(e.currentTarget).position().left,
					y: e.pageY - $(e.currentTarget).position().top,
				}
				if (this.parentElement.direction === 'horizontal') {
					$(".slider__thumb").css({ left: cursorPosition.x })
					$(".slider__fill").css({ width: cursorPosition.x })
				} else {
					$(".slider__thumb").css({ top: cursorPosition.y })
					$(".slider__fill").css({ height: cursorPosition.y })
				}

			}
		)
	}
}

export default Track
