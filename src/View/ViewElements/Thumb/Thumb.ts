import Observer from "../../../Observer/Observer";
import { Direction, SliderThumbState } from "../../../Interfaces/interfaces";
import View from "../../View";
import handleDrag from "./utils/handleDrag";
import prepareOffset from "../../../Model/ThumbModelModules/prepareOffset";

class Thumb extends Observer {
	public view: View;
	public step: number;
	public stepPercent: number;
	public stepCount: number;
	public value: number[];
	public offset: number[];
	public isDecimal: boolean;
	public decimalPlaces: number;
	public activeStance: number;
	constructor(view: View) {
		super();
		this.view = view;
		this.step = 0;
		this.stepPercent = 0;
		this.stepCount = 0;
		this.value = [];
		this.offset = [];
		this.isDecimal = false;
		this.decimalPlaces = 0;
		this.activeStance = 0;
	}

	public createThumb(stance: number) {
		$(this.view.root).append(
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
		if (isDecimal) {
			this.decimalPlaces = decimalPlaces;
		} else {
			this.decimalPlaces = 0;
		}
	}

	public dragThumb(stance: number) {
		$(this.view.root).on(
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

		$(this.view.root).on(
			"touchstart",
			`.slider__thumb-${stance}`,
			(event: JQuery.TouchStartEvent) => {
				event.preventDefault();
				event.stopPropagation();

				$("body").on(
					"touchmove",
					{
						thisThumb: this,
						stance,
					},
					handleDrag
				);
			}
		);
	}

	public dropThumb() {
		$("body").on("mouseup", (event: JQuery.MouseUpEvent) => {
			$("body").off("mousemove");
		});
		$(this.view.root).on("mouseup", (event: JQuery.MouseUpEvent) => {
			$(this.view.root).off("mousemove");
		});
		$("body").on("touchend", (event: JQuery.TouchEndEvent) => {
			$("body").off("touchmove");
		});
		$(this.view.root).on("touchend", (event: JQuery.TouchEndEvent) => {
			$(this.view.root).off("touchmove");
		});
	}
}

export default Thumb;
