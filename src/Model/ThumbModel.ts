import Observer from "../Observer/Observer";
import { Direction, IEnds, ISliderThumbState } from "../Interfaces/interfaces";

class ThumbModel extends Observer {
	private sliderClass: string;
	private step: number;
	private value: number;
	private stance: number;
	private stepCount: number;
	private stepPercent: number;
	private offset: number;
	private stepOffset: number;
	private cursorOffset: number;
	constructor(sliderClass: string, stance: number) {
		super();
		this.sliderClass = sliderClass;
		this.stance = stance;
		this.step = 1;
		this.value = 0;
		this.stepCount = 0;
		this.stepPercent = 0;
		this.offset = 0;
		this.stepOffset = 0;
		this.cursorOffset = 0;
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

	public setOffset(ends: IEnds) {
		this.offset = this.value / (ends.max / 100);
	}

	public setStepOffset() {
		this.stepOffset =
			Math.round(this.cursorOffset / this.stepPercent) * this.stepPercent;
	}
	public setCursorOffset(coord: number, direction: Direction, size: number) {
		this.cursorOffset =
			((coord -
				(direction === "horizontal"
					? $(".slider").position().left
					: $(".slider").position().top)) /
				size) *
			100;

		if (this.cursorOffset < 0) this.cursorOffset = 0;
		if (this.cursorOffset > 100) this.cursorOffset = 100;
	}

	public updateThumbModel(
		stance: number,
		size: number,
		coord: number,
		ends: IEnds,
		direction: Direction
	) {
		this.setCursorOffset(coord, direction, size);
		this.setStepOffset();

		const value = (this.stepOffset / this.stepPercent) * this.step;

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
		};
	}
}

export default ThumbModel;
