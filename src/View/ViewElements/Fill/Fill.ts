import { Direction } from "../../../Interfaces/interfaces";
import View from "../../View";

class Fill {
	private parentElement: View;
	private fill: JQuery<HTMLElement>;
	private width: number;
	private offset: number;
	constructor(parentElement: View) {
		this.parentElement = parentElement;
		this.fill = $(".slider__fill");
		this.width = 100;
		this.offset = 0;
	}

	public createFill(direction: Direction) {
		this.parentElement.parent.append(
			`<div class="slider__fill slider__fill-${direction}"></div>`
		);
	}
	public updateWidth(width: number) {
		this.width = width;
	}
	public updateOffset(offset: number) {
		this.offset = offset;
	}
}

export default Fill;
