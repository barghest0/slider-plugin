import Observer from "../Observer/Observer"
import { IEnds, ISliderThumbState } from "../Interfaces/interfaces"

class ThumbModel extends Observer {
	private sliderClass: string
	private step: number
	private value: number | number[]
	private stance: number
	private stepCount: number
	private stepPercent: number
	constructor(sliderClass: string, stance: number) {
		super()
		this.sliderClass = sliderClass
		this.stance = stance
		this.step = 1
		this.value = 0
		this.stepCount = 0
		this.stepPercent = 0
	}

	public setStep(step: number, ends: IEnds) {
		this.step = step
		this.stepCount = (ends.max - ends.min) / step
		this.stepPercent = 100 / this.stepCount
	}

	public setValue(value: number) {
		this.value = value
	}

	public setStance(stance: number) {
		this.stance = stance
	}

	public updateThumbModel(value: number) {
		this.setValue(value)
		this.notify("UpdateThumbPosition", this.value)
	}

	public getState(): ISliderThumbState {
		return {
			step: this.step,
			stepCount: this.stepCount,
			stepPercent: this.stepPercent,
			value: this.value,
		}
	}
}

export default ThumbModel
