import { Direction } from "../../../Interfaces/interfaces";
import View from "../../View";
import handleClick from "./utils/handleClick";
import Observer from "../../../Observer/Observer";

class Track extends Observer {
	private parentElement: View;
	constructor(parentElement: View) {
		super();
		this.parentElement = parentElement;
	}
	public createTrack(direction: Direction) {
		this.parentElement.parent.append(
			`<div class="slider__track slider__track-${direction}"></div>`
		);
	}

	public clickTrack() {
		this.parentElement.parent.on(
			"mousedown",
			{ thisTrack: this },
			handleClick
		);
	}
}

export default Track;
