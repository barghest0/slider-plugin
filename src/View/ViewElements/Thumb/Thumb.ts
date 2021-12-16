import Observer from "../../../Observer/Observer";
import { Direction } from "../../../utils/interfaces/interfaces";
import View from "../../View";
import getCoords from "../../viewUtils/getCoords";
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

	public createThumb(isRange: boolean, direction: Direction) {
		if (isRange) {
			this.parentElement.parent.append(
				`<div class="slider__thumb slider__thumb-0 slider__thumb-${direction}"></div>`
			);
		}
		this.parentElement.parent.append(
			`<div class="slider__thumb slider__thumb-${
				isRange ? 1 : 0
			} slider__thumb-${direction}"></div>`
		);
	}

	public dragThumb(position: number) {
		console.log(position);

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
