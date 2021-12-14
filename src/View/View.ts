import Thumb from "./ViewElements/Thumb/Thumb"
import Track from "./ViewElements/Track/Track"
import Observer from "../Observer/Observer"
import Scale from "./ViewElements/Scale/Scale"
import Fill from "./ViewElements/Fill/Fill"
import {
	Direction,
	IEnds,
	ISize,
	ISliderParams,
	ISliderState,
	IThumbCoords,
} from "../utils/interfaces/interfaces"
import initialViewRender from "./viewUtils/initialViewRender"
class View extends Observer {
	public thumbView: Thumb
	public trackView: Track
	public scaleView: Scale
	public fillView: Fill
	public ends: IEnds
	public thumbCoords: IThumbCoords
	public value: number

	public parent: JQuery<HTMLElement>
	private isRange: boolean
	public direction: Direction
	public size: ISize
	private initialRender: (direction: Direction) => void
	constructor(sliderClass: string) {
		super()
		this.thumbView = new Thumb(this)
		this.trackView = new Track(this)
		this.scaleView = new Scale(this)
		this.fillView = new Fill(this)
		this.parent = $(sliderClass)
		this.ends = { min: 0, max: 100 }
		this.value = 0
		this.size = { width: 200, height: 4 }
		this.thumbCoords = { x: 0, y: 0 }
		this.isRange = false
		this.direction = "horizontal"
		this.initialRender = initialViewRender.bind(this)
	}

	public render(params: ISliderParams) {
		this.createView(params).initialRender(params.direction)
	}

	public createView(params: ISliderParams) {
		this.parent.addClass(`slider-${params.direction}`)
		this.trackView.createTrack(params.direction)
		this.thumbView.createThumb(params.isRange, params.direction)
		this.scaleView.createScale(params.direction)
		this.fillView.createFill(params.direction)
		return this
	}

	public setState(state: ISliderState) {
		const { step, value, isRange, direction, ends, size } = state
		this.ends = ends
		this.value = value
		this.size = size
		this.setStep(step)
		this.isRange = isRange
		this.direction = direction
	}

	public setStep(step: number) {
		this.thumbView.step = step
		this.thumbView.stepCount = (this.ends.max - this.ends.min) / step
		this.thumbView.stepPercent = 100 / this.thumbView.stepCount
	}
}
export default View
