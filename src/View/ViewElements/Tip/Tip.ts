import { Direction } from "../../../Interfaces/interfaces";
import View from "../../View";
import updateTipsPosition from "./utils/updateTipsPosition";

class Tip {
	public view: View;
	public updateTipsPosition: (stance: number, dragDirection: Direction) => void;
	constructor(view: View) {
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
