import { Direction } from "../../../Interfaces/interfaces";
import Observer from "../../../Observer/Observer";
import View from "../../View";

class Fill extends Observer {
	private parentElement: View;
	private fill: JQuery<HTMLElement>;
	public size: number;
	public offset: number;
	constructor(parentElement: View) {
		super();
		this.parentElement = parentElement;
		this.fill = $(".slider__fill");
		this.size = 0;
		this.offset = 0;
	}

	public createFill(direction: Direction) {
		this.parentElement.parent.append(
			`<div class="slider__fill slider__fill-${direction}"></div>`
		);
	}
	public setSize(size: number) {
		this.size = size;
	}
	public setOffset(offset: number) {
		this.offset = offset;
	}
}

export default Fill;
