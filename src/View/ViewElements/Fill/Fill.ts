import { Direction } from "../../../Interfaces/interfaces";
import Observer from "../../../Observer/Observer";
import View from "../../View";

class Fill extends Observer {
	private parentElement: View;
	private fill: JQuery<HTMLElement>;
	private width: number;
	private offset: number;
	constructor(parentElement: View) {
		super();
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
	public setWidth(width: number) {
		this.width = width;
	}
	public setOffset(offset: number) {
		this.offset = offset;
	}
}

export default Fill;
