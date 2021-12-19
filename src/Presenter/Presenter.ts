import View from "../View/View"
import TrackModel from "../Model/TrackModel"
import { Direction, ISliderParams } from "../Interfaces/interfaces"
import ThumbModel from "../Model/ThumbModel"
import Thumb from "../View/ViewElements/Thumb/Thumb"

class Presenter {
	private trackModel: TrackModel
	private view: View
	private params: ISliderParams
	private sliderClass: string
	private thumbs: ThumbModel[]
	private thumbStance: number
	constructor(sliderClass: string, params: ISliderParams) {
		this.sliderClass = sliderClass
		this.trackModel = new TrackModel(sliderClass)
		this.view = new View(sliderClass)
		this.thumbs = []
		this.params = params
		this.thumbStance = 0
		this.init(params)
		this.subscribe()
		this.addListeners(params.isRange)
	}

	private init(params: ISliderParams) {
		this.setTrackModelState(params)
			.setTrackViewState()
			.createSlider(params)
	}

	private setTrackModelState({
		min,
		max,
		isRange,
		direction,
	}: ISliderParams) {
		const height = $(this.sliderClass).height()!
		const width = $(this.sliderClass).width()!
		this.trackModel.setSize({ width: 4, height: 200 })
		this.trackModel.setEnds({ min, max })
		this.trackModel.setIsRange(isRange)
		this.trackModel.setDirection(direction)
		return this
	}
	private setTrackViewState() {
		this.view.setState(this.trackModel.getState())
		return this
	}

	public createSlider({
		isRange,
		step,
		value,
		min,
		max,
		direction,
	}: ISliderParams) {
		$(this.sliderClass).addClass(`slider-${direction}`)
		this.createTrackView(direction)
		this.createScaleView(direction)
		this.creteFillView(direction)

		this.createThumb(this.thumbStance)
		this.setThumbModelState(
			this.thumbStance,
			step,
			Array.isArray(value) ? value[0] : value,
			min,
			max
		)
		this.createThumbView(this.thumbStance)
		this.setThumbViewStateAndPlacement(direction, this.thumbStance)

		if (isRange) {
			this.thumbStance += 1
			this.createThumb(this.thumbStance)
			this.setThumbModelState(
				this.thumbStance,
				step,
				Array.isArray(value) ? value[1] : value,
				min,
				max
			)
			this.createThumbView(this.thumbStance)
			this.setThumbViewStateAndPlacement(direction, this.thumbStance)
		}

		this.setInitialFillPlacement(direction)
		return this
	}

	private setThumbModelState(
		stance: number,
		step: number,
		value: number,
		min: number,
		max: number
	) {
		this.thumbs.forEach((thumb) => {
			thumb.setStep(step, { min, max })
		})
		this.thumbs[stance].setStance(stance)
		this.thumbs[stance].setValue(value)
		return this
	}
	private setThumbViewStateAndPlacement(direction: Direction, stance: number) {
		const { step, stepCount, stepPercent, value } =
			this.thumbs[stance].getState()
		this.view.thumbView.setStep(step, stepPercent, stepCount)
		this.view.thumbView.setValue(value)
		this.view.initialThumbPlacement(direction, stance)
		return this
	}

	private setInitialFillPlacement(direction: Direction,) {
		$(document).ready(() => {
			this.view.initialFillPlacement(direction)
		})
	}

	private createThumb(stance: number) {
		this.thumbs.push(new ThumbModel(this.sliderClass, stance))
	}

	private createThumbView(stance: number) {
		this.view.thumbView.createThumb(stance)
	}

	private createTrackView(direction: Direction) {
		this.view.trackView.createTrack(direction)
	}
	private createScaleView(direction: Direction) {
		this.view.scaleView.createScale(direction)
	}

	private creteFillView(direction: Direction) {
		this.view.fillView.createFill(direction)
	}

	private addListeners(isRange: boolean) {
		this.view.thumbView.dragThumb(0)
		if (isRange) {
			this.view.thumbView.dragThumb(1)
		}
	}
	private updateThumbModelState(value: number, stance: number) {
		this.thumbs[stance].updateThumbModel(value, stance)
	}

	private updateThumbPosition(value: number, stance: number) {
		this.view.thumbView.updateValue(value, stance)
	}

	// private getRangeValues(): number[] {
	// 	const result: number[] = []
	// 	this.thumbs.forEach(thumb => result.push(thumb.getValue()))
	// 	return result
	// }

	private subscribe() {
		this.view.thumbView.subscribe(
			"UpdateThumbModelState",
			this.updateThumbModelState.bind(this)
		)
		this.thumbs.forEach((thumb) =>
			thumb.subscribe(
				"UpdateThumbPosition",
				this.updateThumbPosition.bind(this)
			)
		)
	}
}

export default Presenter
