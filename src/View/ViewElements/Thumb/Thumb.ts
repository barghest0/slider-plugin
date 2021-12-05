import Observer from '../../../Observer/Observer'
import View from "../../View"
import getCoords from '../../viewUtils/getCoords'
import changePosition from "./utils/changePosition"

class Thumb extends Observer {
	private parentElement: View
	private thumb: JQuery<HTMLElement>
	public step: number
	public stepPercent: number
	public stepCount: number
	constructor(parentElement: View) {
		super()
		this.parentElement = parentElement
		this.thumb = $(".slider__thumb")
		this.step = 0 
		this.stepPercent = 0
		this.stepCount = 0
	}
	
	public createThumb() {
		this.parentElement.parent.append('<div class="slider__thumb"></div>')
	}

	public dragThumb() {
		this.parentElement.parent.on(
			"mousedown",
			(event: JQuery.MouseDownEvent) => {
				this.parentElement.horizontalSliderCoords = getCoords($('.slider__track'))
				$("body").on("mousemove", { thisThumb: this, sliderCoords: this.parentElement.horizontalSliderCoords }, changePosition)
					
			}
		)
		$("body").on("mouseup", (event: JQuery.MouseUpEvent) => {
			$("body").off("mousemove")
		})
	}




}

export default Thumb
