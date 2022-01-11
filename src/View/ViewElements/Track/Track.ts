import { Direction } from "../../../Interfaces/interfaces";
import View from "../../View";
import handleClick from "./utils/handleClick";
import Observer from "../../../Observer/Observer";

class Track extends Observer {
	private view: View;
	constructor(view: View) {
		super();
		this.view = view;
	}
	public createTrack(direction: Direction) {
		$(this.view.root).append(
			`<div class="slider__track slider__track-${direction}"></div>`
		);
	}

	public clickTrack() {
		$(this.view.root)
			.on(
				"mousedown",
				{ thisTrack: this },
				handleClick
			);
	}
}

export default Track;
