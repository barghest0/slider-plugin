import { Direction } from "../../../GlobalUtils/interfaces";
import Observer from "../../../Observer/Observer";
import View from "../../View";
import updateFill from './utils/updateFill';

class Fill extends Observer {
	public view: View;
	public updateFill: (direction: Direction) => void;
	private size: number;
	private offset: number;
	constructor(view: View) {
		super();
		this.view = view;
		this.size = 0;
		this.offset = 0;
		this.updateFill = updateFill.bind(this);
	}

	public createFill(direction: Direction, hasFill: boolean) {
		if (hasFill) {
			$(this.view.root).append(
				`<div class="slider__fill slider__fill_${direction}" data-testid="test-fill"></div>`
			);
		}
	}
	public setSize(size: number) {
		this.size = size;
	}
	public setOffset(offset: number) {
		this.offset = offset;
	}

	public getSize() {
		return this.size;
	}
	public getOffset() {
		return this.offset;
	}
}

export default Fill;
