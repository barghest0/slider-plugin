import Thumb from "./ViewElements/Thumb/Thumb";
import Track from "./ViewElements/Track/Track";
import Observer from "../Observer/Observer";
import Scale from "./ViewElements/Scale/Scale";
import Fill from "./ViewElements/Fill/Fill";
import { IEnds, IThumbCoords } from "../utils/interfaces/interfaces";
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
		this.initialRender = initialViewRender.bind(this);
	}

	public createView() {
		this.trackView.createTrack();
		this.thumbView.createThumb();
		this.scaleView.createScale();
		this.fillView.createFill();
	}

	public setState(state: any) {
		const { step, value, width, height } = state;
		const { min, max } = state.ends;

		this.ends = { min, max };
		this.value = value;
		this.width = width;
		this.height = height;
		this.setStep(step);
		this.initialRender();
	}
	public setStep(step: number) {
		this.thumbView.step = step;
		this.thumbView.stepCount = (this.ends.max - this.ends.min) / step;
		this.thumbView.stepPercent = 100 / this.thumbView.stepCount;
	}
}

export default View;
