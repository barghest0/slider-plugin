import View from "../View/View"
import TrackModel from "../Model/TrackModel"
import { Direction, ISliderParams } from "../Interfaces/interfaces"
import ThumbModel from '../Model/ThumbModel'
import Thumb from '../View/ViewElements/Thumb/Thumb'
import { HighlightSpanKind } from 'typescript'

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
		this.addListeners(params)
	}

	private init(params: ISliderParams) {
		this.setTrackModelState(params).createSlider(params)
		console.log(this.thumbs)

	}


	private setTrackModelState({ min, max, isRange, direction }: ISliderParams) {
		const height = $(this.sliderClass).height()!
		const width = $(this.sliderClass).width()!
		this.trackModel.setSize({ width: 200, height: 4 })
		this.trackModel.setEnds({ min, max })
		this.trackModel.setIsRange(isRange)
		this.trackModel.setDirection(direction)
		return this
	}


	public createSlider({ isRange, step, value, min, max,direction }: ISliderParams) {
		this.createThumb(this.thumbStance)
		this.setThumbModelState(this.thumbStance, step, Array.isArray(value) ? value[0] : value, min, max)
		this.createThumbView(isRange,direction,this.thumbStance)
		if (isRange) {
			this.thumbStance += 1
			this.createThumb(this.thumbStance)
			this.setThumbModelState(this.thumbStance, step, Array.isArray(value) ? value[1] : value, min, max)
			this.createThumbView(isRange,direction,this.thumbStance)
		}
		this.createTrack(direction)
		return this
	}


	private setThumbModelState(position: number, step: number, value: number, min: number, max: number) {
		this.thumbs.forEach(thumb => {
			thumb.setStep(step, { min, max })
		})
		this.thumbs[position].setPosition(position)
		this.thumbs[position].setValue(value)

		return this
	}


	private createThumb(position: number,) {
		this.thumbs.push(new ThumbModel(this.sliderClass, position))
	}

	private createThumbView(isRange:boolean,direction:Direction,stance:number) {
		this.view.thumbView.createThumb(direction,stance)
	}

	private createTrack(direction:Direction) {
		this.view.trackView.createTrack(direction)
	}




	// private renderSlider(params: ISliderParams): this {
	// 	this.view.render(params)
	// 	return this
	// }

	// private setViewState(): this {
	// 	const state = this.trackModel.getState()
	// 	this.view.setState(state)

	// 	return this
	// }

	// private setViewThumbState(): this {
	// 	const state = this.thumbs[0].getState()
	// 	return this
	// }





	// private updateModel(...args: any) {
	// 	const [value, x, y] = args
	// 	this.model.updateModel(value)
	// }

	private subscribe() {
		// this.view.subscribe("UpdateModelState", this.updateModel.bind(this))
		// this.trackModel.subscribe("UpdateView", this.setViewState.bind(this))
	}
	private addListeners(params: ISliderParams) {
		this.view.thumbView.dragThumb(0)
		//this.view.trackView.clickTrack(0);
		if (params.isRange) {
			this.view.thumbView.dragThumb(1)
			//this.view.trackView.clickTrack(1);
		}
	}
}

export default Presenter
