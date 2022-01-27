import { Direction } from "../../../GlobalUtils/interfaces";
import Observer from '../../../Observer/Observer';
import View from "../../View";
import updateTipsPosition from "./utils/updateTipsPosition";

class Tip extends Observer {
	public view: View;
	public updateTipsPosition: (offset: number, stance: number, value: number) => void;
	private offset: number[];
	private value: number[];
	constructor(view: View) {
		super();
		this.view = view;
		this.offset = [];
		this.value = [];
		this.updateTipsPosition = updateTipsPosition.bind(this);
	}
	public setOffset(offset: number, stance: number) {
		this.offset[stance] = offset;
	}
	public getOffset() {
		return this.offset;
	}



	public createTip(direction: Direction, stance: number, hasTips: boolean) {
		if (hasTips) {
			$(this.view.root).append(
				`<div class="slider__tip slider__tip-${stance} slider__tip_${direction}"></div>`
			);
		}
	}
}

export default Tip;
