import Observer from "../Observer/Observer";
import { IEnds, ISliderThumbState } from "../Interfaces/interfaces";

class ThumbModel extends Observer {
	private sliderClass: string;
	private step: number;
	private value: number;
	private stance: number;
	private stepCount: number;
	private stepPercent: number;
	private offset: number;
	private stepOffset: number;
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
		this.stepOffset =
			Math.round(this.offset / this.stepPercent) * this.stepPercent;
		this.offset = this.value / (ends.max / 100);
	}
	public updateOffset(size: number, coord: number) {
		this.offset = ((coord - $(".slider").position().left) / size) * 100;

		this.stepOffset =
			Math.round(this.offset / this.stepPercent) * this.stepPercent;
	}

	public updateThumbModel(
		value: number,
		stance: number,
		ends: IEnds,
		coord: number
	) {
		this.updateOffset(200, coord);
		this.setValue(value);
		this.notify("UpdateThumbPosition", this.value, this.stepOffset, stance);
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
