import Observer from "../Observer/Observer";
import {
	Direction,
	Ends,
	SliderFillState,
	SliderParams,
	SliderTrackState,
} from "../GlobalUtils/interfaces";

class TrackModel extends Observer {
	private root: string;
	public isRange: boolean;
	public direction: Direction;
	public ends: Ends;
	public size: number;
	public fillSize: number;
	public fillOffset: number;
	public hasFill: boolean;
	public hasTips: boolean;
	public hasScale: boolean;
	constructor(root: string) {
		super();
		this.root = root;
		this.ends = { min: 1, max: 100 };
		this.size = 200;
		this.isRange = false;
		this.direction = "horizontal";
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

	public calculateFillSize(direction: Direction) {
		let fillSize = 0;

		if (this.isRange) {
			if (direction === "horizontal") {
				fillSize +=
					parseInt($(`${this.root} .slider__thumb-1`).css("left")) -
					parseInt($(`${this.root} .slider__thumb-0`).css("left"));
			} else {
				fillSize +=
					parseInt($(`${this.root} .slider__thumb-0`).css("top")) -
					parseInt($(`${this.root} .slider__thumb-1`).css("top"));
			}
		} else {

			fillSize += parseInt(
				$(`${this.root} .slider__thumb-0`).css(
					direction === "horizontal" ? "left" : "bottom"
				)
			);
			if (direction === "vertical") {
				fillSize += parseInt(
					$(`${this.root} .slider__thumb-0`).css("height")
				);
			}
		}

		return +(fillSize / this.size * 100).toFixed(1);
	}

	public setFillSize(fillSize: number) {
		this.fillSize = fillSize;
	}

	public calculateFillOffset(direction: Direction) {
		let fillOffset = 0;
		if (this.isRange) {
			if (direction === "horizontal") {
				fillOffset += parseInt(
					$(`${this.root} .slider__thumb-0`).css("left"),
					10
				);
			} else {
				fillOffset += parseInt(
					$(`${this.root} .slider__thumb-1`).css("top"),
					10
				);
			}
		} else {
			fillOffset = 0;
		}
		return +(fillOffset / this.size * 100).toFixed(1);
	}

	public setFillOffset(fillOffset: number) {
		this.fillOffset = fillOffset;
	}

	public updateTrackFill(direction: Direction) {
		this.setFillSize(this.calculateFillSize(direction));
		this.setFillOffset(this.calculateFillOffset(direction));


		this.notify("UpdateTrackFillView", this.fillSize, this.fillOffset, direction);
	}

	public prepareChooseStance(cursorOffset: number) {
		let stance = 0;
		const chooseCorrectStance =
			cursorOffset > this.fillSize / 2 + this.fillOffset;

		if (chooseCorrectStance) stance = 1;

		if (this.direction === "vertical") stance = +!stance;

		if (!this.isRange) {
			stance = 0;
		}
		console.log('prepareChoose');

		this.notify(
			"UpdateThumbModel",
			stance,
			cursorOffset,
			this.direction,
			this.size
		);
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
