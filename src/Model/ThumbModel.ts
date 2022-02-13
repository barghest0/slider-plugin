import Observer from '../Observer/Observer';
import {
	Direction,
	Directions,
	Ends,
	SliderThumbState,
	SubscribersNames,
} from '../utils/interfaces';
import prepareOffset from './ThumbModelModules/prepareOffset';
import endsValidation from './ThumbModelModules/endsValidation';
import { MAX_OFFSET } from '../utils/constants';

class ThumbModel extends Observer {
	public endsValidation: (ends: Ends, direction: Direction) => void;

	public prepareOffset: (offset: number, direction: Direction) => number;

	private DOMroot: HTMLElement;

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

	constructor(DOMroot: HTMLElement, stance: number) {
		super();
		this.DOMroot = DOMroot;
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

	public setValue(value: number) {
		this.value = +value.toFixed(this.decimalPlaces);
	}

	public setStance(stance: number) {
		this.stance = stance;
	}

	public setIsDecimal(isDecimal: boolean, decimalPlaces: number) {
		this.isDecimal = isDecimal;
		this.decimalPlaces = decimalPlaces;
	}

	public calculateOffset(ends: Ends, direction: Direction) {
		return this.prepareOffset((this.value - ends.min) / ((ends.max - ends.min) / 100), direction);
	}

	public setOffset(offset: number) {
		this.offset = offset;
	}

	public setStepOffset(stepOffset: number) {
		this.stepOffset = stepOffset;
	}

	public calculateStepOffset() {
		return Math.round(this.cursorOffset / this.stepPercent) * this.stepPercent;
	}

	public setCursorOffset(cursorOffset: number) {
		this.cursorOffset = cursorOffset;
	}

	public updateThumbValue(stance: number, ends: Ends, cursorOffset: number, direction: Direction) {
		if (direction === Directions.horizontal) this.setCursorOffset(cursorOffset);
		else this.setCursorOffset(MAX_OFFSET - cursorOffset);

		this.setStepOffset(this.calculateStepOffset());
		this.setValue(this.calculateValue(ends));

		this.setOffset(this.calculateOffset(ends, direction));
		this.endsValidation(ends, direction);

		this.notify(
			SubscribersNames.updateThumbView,
			this.value,
			this.offset,
			stance,
			this.cursorOffset,
		);
		this.notify(SubscribersNames.updateTipView, stance, this.offset, this.value);
		this.notify(SubscribersNames.updateValues, this.value, stance);
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

	private calculateValue(ends: Ends) {
		return (this.stepOffset / this.stepPercent) * this.step + ends.min;
	}
}

export default ThumbModel;
