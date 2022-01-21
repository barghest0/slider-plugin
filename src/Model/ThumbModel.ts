import Observer from "../Observer/Observer";
import { Direction, Ends, SliderThumbState } from "../Interfaces/interfaces";
import prepareOffset from "./ThumbModelModules/prepareOffset";
import endsValidation from "./ThumbModelModules/endsValidation";

class ThumbModel extends Observer {
	private root: string;
	private offset: number;
	private value: number;
	private step: number;
	private stance: number;
	private stepCount: number;
	private stepPercent: number;
	private stepOffset: number;
	private cursorOffset: number;
	private isDecimal: boolean;
	private decimalPlaces: number;
	private endsValidation: (ends: Ends, direction: Direction) => void;
	private prepareOffset: (offset: number, direction: Direction) => number;
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
		this.endsValidation = endsValidation.bind(this);
		this.prepareOffset = prepareOffset.bind(this);
	}

	public setStep(step: number, ends: Ends) {
		this.step = step;
		this.stepCount = (ends.max - ends.min) / step;
		this.stepPercent = 100 / this.stepCount;
	}

	private calculateValue(ends: Ends) {
		return (this.stepOffset / this.stepPercent) * this.step + ends.min;
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

	public calculateOffset(ends: Ends, direction: Direction) {
		return this.prepareOffset(
			(this.value - ends.min) / ((ends.max - ends.min) / 100),
			direction
		);
	}

	public setOffset(offset: number) {
		this.offset = offset;
	}

	public setStepOffset(stepOffset: number) {
		this.stepOffset = stepOffset;
	}
	private calculateStepOffset(cursorOffset: number, stepPercent: number) {
		return (
			Math.round(cursorOffset / stepPercent) * stepPercent
		);
	}

	private calculateCursorOffset(cursorCoordinate: number, size: number) {
		return (cursorCoordinate / size) * 100;
	}

	public setCursorOffset(cursorOffset: number) {
		this.cursorOffset = cursorOffset;
	}

	public updateThumbValue(
		stance: number,
		ends: Ends,
		cursorCoordinate: number,
		direction: Direction,
		size: number
	) {
		if (direction === "horizontal") {
			this.setCursorOffset(
				this.calculateCursorOffset(cursorCoordinate, size)
			);
		} else {
			this.setCursorOffset(
				100 - this.calculateCursorOffset(cursorCoordinate, size)
			);
		}
		this.setStepOffset(
			this.calculateStepOffset(this.cursorOffset, this.stepPercent)
		);
		this.setValue(this.calculateValue(ends));
		this.setOffset(this.calculateOffset(ends, direction));
		this.endsValidation(ends, direction);
		this.notify("UpdatePanelValues", this.value, stance);
		this.notify(
			"UpdateThumbView",
			this.value,
			this.offset,
			stance,
			this.cursorOffset
		);
		this.notify("UpdateTipView", stance, this.offset);
	}

	public getValue() {
		return this.value;
	}
	public getOffset() {
		return this.offset;
	}

	public getState(): SliderThumbState {
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
