import Observer from "../../../Observer/Observer";
import { Direction, ISliderThumbState } from "../../../Interfaces/interfaces";
import View from "../../View";
import handleDrag from "./utils/handleDrag";

class Thumb extends Observer {
	public parentElement: View;
	public step: number;
	public stepPercent: number;
	public stepCount: number;
	public value: number[];
	public offset: number[];
	public isDecimal: boolean;
	public decimalPlaces: number;
	constructor(parentElement: View) {
		super();
		this.parentElement = parentElement;
		this.step = 0;
		this.stepPercent = 0;
		this.stepCount = 0;
		this.value = [];
		this.offset = [];
		this.isDecimal = false;
		this.decimalPlaces = 0;
	}

	public createThumb(stance: number) {
		this.parentElement.parent.append(
			`<div class="slider__thumb slider__thumb-${stance}"></div>`
		);
	}
	public setStep(step: number, stepPercent: number, stepCount: number) {
		this.step = step;
		this.stepPercent = stepPercent;
		this.stepCount = stepCount;
	}
	public setValue(value: number, stance: number) {
		this.value[stance] = value;
	}
	public setOffset(offset: number, stance: number) {
		this.offset[stance] = offset;
	}
	public setIsDecimal(isDecimal: boolean, decimalPlaces: number) {
		console.log(isDecimal);

		if (isDecimal) {
			this.decimalPlaces = decimalPlaces;
		} else {
			this.decimalPlaces = 0;
		}
	}

	public dragThumb(stance: number) {
		this.parentElement.parent.on(
			"mousedown",
			`.slider__thumb-${stance}`,
			(event: JQuery.MouseDownEvent) => {
				event.preventDefault();
				event.stopPropagation();
				$("body").on(
					"mousemove",
					{
						thisThumb: this,
						stance,
					},
					handleDrag
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
