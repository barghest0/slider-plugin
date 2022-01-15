import Observer from "../Observer/Observer";
import {
	Direction,
	IEnds,
	ISliderFillState,
	ISliderParams,
	ISliderTrackState,
} from "../Interfaces/interfaces";

class TrackModel extends Observer {
	private root: string;
	public isRange: boolean;
	public direction: Direction;
	public ends: IEnds;
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

	public setEnds({ min, max }: IEnds) {
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
	public setSupElements(
		hasFill: boolean,
		hasTips: boolean,
		hasScale: boolean
	) {
		this.hasScale = hasScale;
		this.hasTips = hasTips;
		this.hasFill = hasFill;
	}
	public setFillSize(direction: Direction) {
		if (this.isRange) {
			if (direction === "horizontal") {
				this.fillSize =
					parseInt($(`${this.root} .slider__thumb-1`).css("left")) -
					parseInt($(`${this.root} .slider__thumb-0`).css("left"));
			} else {
				this.fillSize =
					parseInt($(`${this.root} .slider__thumb-0`).css("top")) -
					parseInt($(`${this.root} .slider__thumb-1`).css("top"));
			}
		} else {
			this.fillSize =
				parseInt(
					$(`${this.root} .slider__thumb-0`).css(
						direction === "horizontal" ? "left" : "bottom"
					)
				) + 15;
		}
	}

	public setFillOffset(direction: Direction) {
		if (this.isRange) {
			if (direction === "horizontal") {
				this.fillOffset = parseInt(
					$(`${this.root} .slider__thumb-0`).css("left"),
					10
				);
			} else {
				this.fillOffset = parseInt(
					$(`${this.root} .slider__thumb-1`).css("top"),
					10
				);
			}
		} else {
			this.fillOffset = 0;
		}
	}

	public updateTrackFill(direction: Direction) {
		this.setFillSize(direction);
		this.setFillOffset(direction);
		this.notify("UpdateTrackFillPosition", this.fillSize, this.fillOffset);
	}
	public getState(): ISliderTrackState {
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
	public getFillState(): ISliderFillState {
		return {
			fillSize: this.fillSize,
			fillOffset: this.fillOffset,
		};
	}
}

export default TrackModel;
