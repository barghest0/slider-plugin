import Observer from "../Observer/Observer"
import {
	Direction,
	IEnds,
	ISliderTrackState,
	ISize,
} from "../Interfaces/interfaces"

class TrackModel extends Observer {
	private sliderClass: string
	private isRange: boolean
	private direction: Direction
	private ends: IEnds
	private size: ISize
	constructor(sliderClass: string) {
		super()
		this.sliderClass = sliderClass
		this.ends = { min: 1, max: 100 }
		this.size = { width: 200, height: 4 }
		this.isRange = false
		this.direction = "horizontal"
	}

	public setEnds({ min, max }: IEnds) {
		this.ends = { min, max }
	}

	public setSize({ width, height }: ISize) {
		this.size = { width, height }
	}
	public setIsRange(isRange: boolean) {
		this.isRange = isRange
	}

	public setDirection(direction: Direction) {
		this.direction = direction
	}

	public getState(): ISliderTrackState {
		return {
			ends: this.ends,
			size: this.size,
			isRange: this.isRange,
			direction: this.direction,
		}
	}
}

export default TrackModel
