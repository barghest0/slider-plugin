import { Direction } from "../../../Interfaces/interfaces";
import Observer from "../../../Observer/Observer";
import View from "../../View";

class Fill extends Observer {
	private view: View;
	private fill: JQuery<HTMLElement>;
	public size: number;
	public offset: number;
	constructor(view: View) {
		super();
		this.view = view;
		this.fill = $(".slider__fill");
		this.size = 0;
		this.offset = 0;
	}

	public createFill(direction: Direction, hasFill: boolean) {
		if (hasFill) {
			$(this.view.root).append(
				`<div class="slider__fill slider__fill-${direction}"></div>`
			);
		}
	}
	public setSize(size: number) {
		this.size = size;
	}
	public setOffset(offset: number) {
		this.offset = offset;
	}
}

export default Fill;
