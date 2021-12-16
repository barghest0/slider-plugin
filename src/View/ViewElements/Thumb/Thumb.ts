import Observer from "../../../Observer/Observer";
import { Direction } from "../../../utils/interfaces/interfaces";
import View from "../../View";
import getCoords from "../../viewUtils/getCoords";
import changePosition from "./utils/changePosition";

class Thumb extends Observer {
	public parentElement: View;
	private thumb: JQuery<HTMLElement>;
	public step: number;
	public stepPercent: number;
	public stepCount: number;
	constructor(parentElement: View) {
		super();
		this.parentElement = parentElement;
		this.thumb = $(".slider__thumb");
		this.step = 0;
		this.stepPercent = 0;
		this.stepCount = 0;
	}

	public createThumb(isRange: boolean,direction:Direction) {
		if (isRange) {
			this.parentElement.parent.append(
				`<div class="slider__thumb thumb-position-0 slider__thumb-${direction}"></div>`
			);
		}
		this.parentElement.parent.append(
			`<div class="slider__thumb thumb-position-1 slider__thumb-${direction}"></div>`
		);
	}

	public dragThumb() {
		this.parentElement.parent.on(
			"mousedown",
			'.thumb-position-1',
			(event: JQuery.MouseDownEvent) => {
				this.parentElement.thumbCoords = getCoords($(".slider__track"));
				$("body").on(
					"mousemove",
					{
						thisThumb: this,
						thumbCoords: this.parentElement.thumbCoords,
						
					},
					changePosition
				);
			}
		);
		$("body").on("mouseup", (event: JQuery.MouseUpEvent) => {
			$("body").off("mousemove");
		});
	}
}

export default Thumb;
