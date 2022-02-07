import Observer from '../Observer/Observer';
import {
	FIRST_OFFSET,
	FIRST_THUMB_STANCE,
	MAX_OFFSET,
	MIN_OFFSET,
	SECOND_OFFSET,
	SECOND_THUMB_STANCE,
} from '../utils/constants';
import {
	Direction,
	Ends,
	SliderFillState,
	SliderTrackState,
	SubscribersNames,
} from '../utils/interfaces';

class TrackModel extends Observer {
	public isRange: boolean;

	public direction: Direction;

	public ends: Ends;

	public size: number;

	public fillSize: number;

	public fillOffset: number;

	public hasFill: boolean;

	public hasTips: boolean;

	public hasScale: boolean;

	private DOMroot: HTMLElement;

	constructor(DOMroot: HTMLElement) {
		super();
		this.DOMroot = DOMroot;
		this.ends = { min: 1, max: 100 };
		this.size = 200;
		this.isRange = false;
		this.direction = 'horizontal';
		this.fillSize = 0;
		this.fillOffset = 0;
		this.hasFill = true;
		this.hasTips = true;
		this.hasScale = true;
	}

	public setEnds({ min, max }: Ends) {
		this.ends = { min, max };
	}

	public setSize(size: number) {
		this.size = size;
	}

	public setIsRange(isRange: boolean) {
		this.isRange = isRange;
	}

	public setDirection(direction: Direction) {
		this.direction = direction;
	}

	public setSubViews(hasFill: boolean, hasTips: boolean, hasScale: boolean) {
		this.hasScale = hasScale;
		this.hasTips = hasTips;
		this.hasFill = hasFill;
	}

	public calculateFillSize(offset: number[]) {
		if (this.isRange) {
			return this.direction === 'horizontal'
				? offset[SECOND_OFFSET] - offset[FIRST_OFFSET]
				: offset[FIRST_OFFSET] - offset[SECOND_OFFSET];
		}
		return this.direction === 'horizontal'
			? offset[FIRST_OFFSET]
			: MAX_OFFSET - offset[FIRST_OFFSET];
	}

	public setFillSize(fillSize: number) {
		this.fillSize = fillSize;
	}

	public calculateFillOffset(offset: number[]) {
		if (this.isRange) {
			return this.direction === 'horizontal' ? offset[FIRST_OFFSET] : offset[SECOND_OFFSET];
		}
		return MIN_OFFSET;
	}

	public setFillOffset(fillOffset: number) {
		this.fillOffset = fillOffset;
	}

	public updateTrackFill(offset: number[]) {
		this.setFillSize(this.calculateFillSize(offset));
		this.setFillOffset(this.calculateFillOffset(offset));

		this.notify(SubscribersNames.updateTrackFillView, this.fillSize, this.fillOffset);
	}

	public prepareChooseStance(cursorOffset: number) {
		let stance = FIRST_THUMB_STANCE;
		const chooseCorrectStance = cursorOffset > this.fillSize / 2 + this.fillOffset;

		if (chooseCorrectStance) stance = SECOND_THUMB_STANCE;

		if (this.direction === 'vertical') stance = +!stance;

		if (!this.isRange) {
			stance = FIRST_THUMB_STANCE;
		}

		this.notify(SubscribersNames.updateThumbModel, stance, cursorOffset, this.direction, this.size);
	}

	public getState(): SliderTrackState {
		return {
			ends: this.ends,
			size: this.size,
			isRange: this.isRange,
			direction: this.direction,
			hasFill: this.hasFill,
			hasTips: this.hasTips,
			hasScale: this.hasScale,
		};
	}

	public getFillSize() {
		return this.fillSize;
	}

	public getFillOffset() {
		return this.fillOffset;
	}

	public getFillState(): SliderFillState {
		return {
			fillSize: this.getFillSize(),
			fillOffset: this.getFillOffset(),
		};
	}
}

export default TrackModel;
