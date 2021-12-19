import Observer from "../../../Observer/Observer"
import {
	Direction,
	ISliderThumbState,
} from "../../../Interfaces/interfaces"
import View from "../../View"
import getCoords from "../../ViewModules/getCoords"
import handleDrag from "./utils/handleDrag"

class Thumb extends Observer {
	public parentElement: View
	public step: number
	public stepPercent: number
	public stepCount: number
	public value: number
	constructor(parentElement: View) {
		super()
		this.parentElement = parentElement
		this.step = 0
		this.stepPercent = 0
		this.stepCount = 0
		this.value = 0
	}

	public createThumb(stance: number) {
		this.parentElement.parent.append(
			`<div class="slider__thumb slider__thumb-${stance}"></div>`
		)
	}
	public setStep(step: number, stepPercent: number, stepCount: number) {
		this.step = step
		this.stepPercent = stepPercent
		this.stepCount = stepCount
	}
	public setValue(value: number) {
		this.value = value
	}
	public dragThumb(stance: number) {
		this.parentElement.parent.on(
			"mousedown",
			`.slider__thumb-${stance}`,

			(event: JQuery.MouseDownEvent) => {
				$("body").on(
					"mousemove",
					{
						thisThumb: this,
						stance,
					},
					handleDrag
				)
			}
		)
		$("body").on("mouseup", (event: JQuery.MouseUpEvent) => {
			$("body").off("mousemove")
		})
		this.parentElement.parent.on(
			"mouseup",
			(event: JQuery.MouseUpEvent) => {
				this.parentElement.parent.off("mousemove")
			}
		)
	}
}

export default Thumb
