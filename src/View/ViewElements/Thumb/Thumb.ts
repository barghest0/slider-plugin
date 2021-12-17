import Observer from "../../../Observer/Observer";
import { Direction } from "../../../Interfaces/interfaces";
import View from "../../View";
import getCoords from "../../ViewModules/getCoords";
import changePosition from "./utils/changePosition";

class Thumb extends Observer {
	public parentElement: View;
	public step: number;
	public stepPercent: number;
	public stepCount: number;
	constructor(parentElement: View) {
		super();
		this.parentElement = parentElement;
		this.step = 0;
		this.stepPercent = 0;
		this.stepCount = 0;
	}

	public createThumb(direction: Direction,stance:number) {
		this.parentElement.parent.append(
			`<div class="slider__thumb slider__thumb-${stance} slider__thumb-${direction}"></div>`
		);
	}

	public dragThumb(position: number) {
		this.parentElement.parent.on(
			"mousedown",
			`.slider__thumb-${position}`,
			(event: JQuery.MouseDownEvent) => {
				this.parentElement.thumbCoords = getCoords($(".slider__track"));
				$("body").on(
					"mousemove",
					{
						thisThumb: this,
						thumbCoords: this.parentElement.thumbCoords,
						position,
					},
					changePosition
				);
			}
		);
		$("body").on("mouseup", (event: JQuery.MouseUpEvent) => {
			$("body").off("mousemove");
		});
		this.parentElement.parent.on(
			"mouseup",
			(event: JQuery.MouseUpEvent) => {
				this.parentElement.parent.off("mousemove");
			}
		);
	}
}

export default Thumb;
