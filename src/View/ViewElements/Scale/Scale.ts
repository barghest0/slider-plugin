import { Direction } from "../../../Interfaces/interfaces";
import View from "../../View";
import createScaleMarks from "./utils/createScaleMarks";

class Scale {
	public createScaleMarks: (
		step: number,
		max: number,
		min: number,
		direction: Direction
	) => void;
	public view: View;

	constructor(view: View) {
		this.view = view;
		this.createScaleMarks = createScaleMarks.bind(this);
	}

	public createScale(direction: Direction, hasScale: boolean) {
		if (hasScale) {
			$(this.view.root).append(
				`<div class="slider__scale slider__scale_${direction}"  data-testid="test-scale"></div>`
			);
		}
	}
}

export default Scale;
