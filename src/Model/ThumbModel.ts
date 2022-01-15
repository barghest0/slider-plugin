import Observer from "../Observer/Observer";
import { Direction, IEnds, ISliderThumbState } from "../Interfaces/interfaces";
import { timers } from "jquery";
import { textChangeRangeIsUnchanged } from "typescript";

class ThumbModel extends Observer {
	private root: string;
	private step: number;
	private value: number;
	private stance: number;
	private stepCount: number;
	private stepPercent: number;
	private offset: number;
	private stepOffset: number;
	private cursorOffset: number;
	private isDecimal: boolean;
	private decimalPlaces: number;
	constructor(root: string, stance: number) {
		super();
		this.root = root;
		this.stance = stance;
		this.step = 1;
		this.value = 0;
		this.stepCount = 0;
		this.stepPercent = 0;
		this.offset = 0;
		this.stepOffset = 0;
		this.cursorOffset = 0;
		this.isDecimal = false;
		this.decimalPlaces = 0;
	}

	public setStep(step: number, ends: IEnds) {
		this.step = step;
		this.stepCount = (ends.max - ends.min) / step;

		this.stepPercent = 100 / this.stepCount;
	}

	public setValue(value: number) {
		this.value = value;
	}

	public setStance(stance: number) {
		this.stance = stance;
	}
	public setIsDecimal(isDecimal: boolean, decimalPlaces: number) {
		this.isDecimal = isDecimal;
		this.decimalPlaces = decimalPlaces;
	}
	public setOffset(ends: IEnds) {
		this.offset = (this.value - ends.min) / ((ends.max - ends.min) / 100);

		if (this.offset > 100) {
			this.offset = 100;
			this.value = ends.max;
		}
		if (this.offset < 0) {
			this.offset = 0;
			this.value = ends.min;
		}
	}

	public setStepOffset() {
		this.stepOffset =
			Math.round(this.cursorOffset / this.stepPercent) * this.stepPercent;
	}
	public setCursorOffset(cursorOffset: number) {
		this.cursorOffset = cursorOffset;
	}

	public updateThumbValue(stance: number, ends: IEnds, cursorOffset: number) {
		this.setCursorOffset(cursorOffset);
		this.setStepOffset();

		const value =
			(this.stepOffset / this.stepPercent) * this.step + ends.min;

		this.setValue(value);
		this.setOffset(ends);
		this.notify("UpdateThumbPosition", this.value, this.offset, stance);
	}

	public getValue() {
		return this.value;
	}

	public getState(): ISliderThumbState {
		return {
			step: this.step,
			stepCount: this.stepCount,
			stepPercent: this.stepPercent,
			value: this.value,
			offset: this.offset,
			stepOffset: this.stepOffset,
			isDecimal: this.isDecimal,
			decimalPlaces: this.decimalPlaces,
		};
	}
}

export default ThumbModel;
