import { Direction } from "../../../Interfaces/interfaces";
import Observer from '../../../Observer/Observer';
import View from "../../View";
import updateTipsPosition from "./utils/updateTipsPosition";

class Tip extends Observer {
	public view: View;
	public updateTipsPosition: (stance: number,offset:number) => void;
	constructor(view: View) {
		super();
		this.view = view;
		this.updateTipsPosition = updateTipsPosition.bind(this);
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
