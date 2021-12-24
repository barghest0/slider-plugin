import Observer from "../Observer/Observer";
import {
	Direction,
	IEnds,
	ISliderFillState,
	ISliderTrackState,
} from "../Interfaces/interfaces";

class TrackModel extends Observer {
	private sliderClass: string;
	private isRange: boolean;
	private direction: Direction;
	private ends: IEnds;
	private size: number;
	private fillSize: number;
	private fillOffset: number;
	constructor(sliderClass: string) {
		super();
		this.sliderClass = sliderClass;
		this.ends = { min: 1, max: 100 };
		this.size = 200;
		this.isRange = false;
		this.direction = "horizontal";
		this.fillSize = 0;
		this.fillOffset = 0;
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
	public setFillSize(direction: Direction) {
		if (this.isRange) {
			this.fillSize =
				parseInt(
					$(`.slider__thumb-1`).css(
						direction === "horizontal" ? "left" : "top"
					),
					10
				) -
				parseInt(
					$(`.slider__thumb-0`).css(
						direction === "horizontal" ? "left" : "top"
					),
					10
				);
		} else {
			this.fillSize = parseInt(
				$(`.slider__thumb-0`).css(
					direction === "horizontal" ? "left" : "top"
				),
				10
			);
		}
	}
	public setFillOffset(direction: Direction) {
		if (this.isRange) {
			this.fillOffset = parseInt(
				$(`.slider__thumb-0`).css(
					direction === "horizontal" ? "left" : "top"
				),
				10
			);
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
