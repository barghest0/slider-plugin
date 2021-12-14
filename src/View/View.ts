import Thumb from "./ViewElements/Thumb/Thumb";
import Track from "./ViewElements/Track/Track";
import Observer from "../Observer/Observer";
import Scale from "./ViewElements/Scale/Scale";
import Fill from "./ViewElements/Fill/Fill";
import { Direction, IEnds, ISliderParams, IThumbCoords } from "../utils/interfaces/interfaces";
import initialViewRender from "./viewUtils/initialViewRender";
class View extends Observer {
	public thumbView: Thumb;
	public trackView: Track;
	public scaleView: Scale;
	public fillView: Fill;
	public ends: IEnds;
	public thumbCoords: IThumbCoords;
	public value: number;
	public width: number;
	public height: number;
	public parent: JQuery<HTMLElement>;
	private isRange: boolean;
	public direction: Direction;
	private initialRender: () => void;
	constructor(sliderClass: string) {
		super();
		this.thumbView = new Thumb(this);
		this.trackView = new Track(this);
		this.scaleView = new Scale(this);
		this.fillView = new Fill(this);
		this.parent = $(sliderClass);
		this.ends = { min: 0, max: 100 };
		this.value = 0;
		this.width = 0;
		this.height = 0;
		this.thumbCoords = { x: 0, y: 0 };
		this.isRange = false;
		this.direction = "horizontal";
		this.initialRender = initialViewRender.bind(this);
	}

	public render(params:ISliderParams) {
		this.createView(params)
		

	}

	public createView(params:ISliderParams){
		this.trackView.createTrack(params.direction);
		this.thumbView.createThumb(params.isRange, params.direction);
		this.scaleView.createScale(params.direction);
		this.fillView.createFill(params.direction);
	}

	public setState(state: any) {
		const { step, value, width, height, isRange, direction } = state;
		const { min, max } = state.ends;
		this.ends = { min, max };
		this.value = value;
		this.width = width;
		this.height = height;
		this.setStep(step);
		this.isRange = isRange;
		this.direction = direction;
		this.initialRender();
	}

	public setStep(step: number) {
		this.thumbView.step = step;
		this.thumbView.stepCount = (this.ends.max - this.ends.min) / step;
		this.thumbView.stepPercent = 100 / this.thumbView.stepCount;
	}
}
export default View;
