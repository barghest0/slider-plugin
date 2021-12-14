import Observer from "../Observer/Observer"
import { Direction, IEnds, ISliderState, IThumbCoords, ISize } from "../utils/interfaces/interfaces"

class Model extends Observer {
	private sliderClass: string
	private ends: IEnds
	private step: number
	private value: number
	private thumbCoords: IThumbCoords
	private isRange: boolean
	private direction: Direction
	private size: ISize
	constructor(sliderClass: string) {
		super()
		this.sliderClass = sliderClass
		this.step = 1
		this.ends = { min: 1, max: 100 }
		this.value = 0
		this.thumbCoords = { x: 0, y: 0 }
		this.size = { width: 200, height: 4 }
		this.isRange = false
		this.direction = "horizontal"
	}

	public setStep(step: number) {
		this.step = step
	}

	public setEnds({ min, max }: IEnds) {
		this.ends = { min, max }
	}
	public setValue(value: number) {
		this.value = value
	}
	public setSize({ width, height }: ISize) {
		this.size = { width, height }
	}
	public setIsRange(isRange: boolean) {
		this.isRange = isRange
	}
	public setCoords({ x, y }: IThumbCoords) {
		this.thumbCoords = { x, y }
	}
	public setDirection(direction: Direction) {
		this.direction = direction
	}

	public updateModel(value: number, x: number, y: number) {
		this.setValue(value)
		this.setCoords({ x, y })
		this.notify("UpdateView")
	}

	public getState(): ISliderState {
		return {
			ends: this.ends,
			step: this.step,
			value: this.value,
			size: this.size,
			thumbCoords: this.thumbCoords,
			isRange: this.isRange,
			direction: this.direction,
		}
	}
}

export default Model
