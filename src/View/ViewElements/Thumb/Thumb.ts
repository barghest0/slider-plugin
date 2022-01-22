import Observer from "../../../Observer/Observer";
import { Direction, SliderThumbState } from "../../../Interfaces/interfaces";
import View from "../../View";
import handleDrag from "./utils/handleDrag";
import prepareOffset from "../../../Model/ThumbModelModules/prepareOffset";
import updateThumbPosition from './utils/updateThumbPosition';
import validateCollision from './utils/validateCollision';
import dragThumb from './utils/dragThumb';
import dropThumb from './utils/dropThumb';

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
	public updateThumbPosition: (offset: number, stance: number) => void;
	public validateCollision: (stance: number) => number;
	public dragThumb: (stance: number) => void;
	public dropThumb: () => void;
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
		this.updateThumbPosition = updateThumbPosition.bind(this);
		this.validateCollision = validateCollision.bind(this);
		this.dragThumb = dragThumb.bind(this);
		this.dropThumb = dropThumb.bind(this);
	}

	public createThumb(stance: number) {
		$(this.view.root).append(
			`<div class="slider__thumb slider__thumb-${stance} data-testid="test-thumb-${stance}""></div>`
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



}

export default Thumb;
