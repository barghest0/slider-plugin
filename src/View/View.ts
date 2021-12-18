import Thumb from "./ViewElements/Thumb/Thumb"
import Track from "./ViewElements/Track/Track"
import Observer from "../Observer/Observer"
import Scale from "./ViewElements/Scale/Scale"
import Fill from "./ViewElements/Fill/Fill"
import {
	Direction,
	ICoords,
	IEnds,
	ISize,
	ISliderTrackState,
} from "../Interfaces/interfaces"
import initialViewRender from "./ViewModules/initialViewRender"
import getCoords from './ViewModules/getCoords'

class View extends Observer {
	public thumbView: Thumb
	public trackView: Track
	public scaleView: Scale
	public fillView: Fill
	public ends: IEnds
	public parent: JQuery<HTMLElement>
	public isRange: boolean
	public direction: Direction
	public size: ISize
	public coords: ICoords
	private initialRender: (direction: Direction, stance: number) => void
	constructor(sliderClass: string) {
		super()
		this.thumbView = new Thumb(this)
		this.trackView = new Track(this)
		this.scaleView = new Scale(this)
		this.fillView = new Fill(this)
		this.parent = $(sliderClass)
		this.ends = { min: 0, max: 0 }
		this.size = { width: 0, height: 0 }
		this.coords = { x: 0, y: 0 }
		this.isRange = false
		this.direction = "horizontal"
		this.initialRender = initialViewRender.bind(this)
	}

	public render(direction: Direction, stance: number) {
		this.initialRender(direction, stance)
	}

	public setState(state: ISliderTrackState) {
		const { isRange, direction, ends, size } = state
		this.ends = ends
		this.size = size
		this.isRange = isRange
		this.direction = direction
	}
}
export default View
