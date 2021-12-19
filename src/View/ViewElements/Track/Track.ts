import { Direction } from "../../../Interfaces/interfaces"
import View from "../../View"
import handleClick from './utils/handleClick'

class Track {
	private parentElement: View
	public track: JQuery<HTMLElement>
	constructor(parentElement: View) {
		this.parentElement = parentElement
		this.track = $(".slider__track")
	}
	public createTrack(direction: Direction) {
		this.parentElement.parent.append(
			`<div class="slider__track slider__track-${direction}"></div>`
		)
	}

	public clickTrack(stance: number) {
		this.parentElement.parent.on("mousedown", { thisTrack: this, stance }, handleClick)
	}
}

export default Track
