import { Direction } from "../../../GlobalUtils/interfaces";
import View from "../../View";
import createScaleMarks from "./utils/createScaleMarks";

class Scale {
	public scale: HTMLElement;
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
		this.scale = view.DOMroot.querySelector('.slider__scale') as HTMLElement;
	}

	public createScale(direction: Direction, hasScale: boolean) {
		if (hasScale) {
			const scale = document.createElement('div');
			scale.classList.add('slider__scale');
			scale.classList.add(`slider__scale_${direction}`);
			scale.dataset.testid = `test-scale`;
			this.scale = scale;
			this.view.DOMroot?.appendChild(scale);
		}
	}
}

export default Scale;
