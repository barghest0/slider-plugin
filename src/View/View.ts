import Thumb from "./ViewElements/Thumb/Thumb";
import Track from "./ViewElements/Track/Track";
import Observer from "../Observer/Observer";
import Scale from "./ViewElements/Scale/Scale";
import Fill from "./ViewElements/Fill/Fill";
import { IEnds, IHorizontalSliderCoords } from "../utils/interfaces/interfaces";
import getCoords from "./viewUtils/getCoords";
class View extends Observer {
	public thumbView: Thumb;
	public trackView: Track;
	public scaleView: Scale;
	public fillView: Fill;
	public ends: IEnds;
	public horizontalSliderCoords: IHorizontalSliderCoords;
	public value: number;
	public width: number;
	public height: number;
	public parent: JQuery<HTMLElement>;
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
		this.horizontalSliderCoords = { left: 0, width: 0 };
	}

	public createViewSlider() {
		this.trackView.createTrack();
		this.thumbView.createThumb();
		this.scaleView.createScale();
		this.fillView.createFill();
	}

	public updateViewSlider() {
		this.thumbView.dragThumb();
		this.trackView.clickTrack();
	}

	public setState(state: any) {
		const { step, min, max, value, width, height } = state;
		this.setStep(step);
		this.ends = { min, max };
		this.value = value;
			this.width = width
			this.height = height
	}
	public setStep(step: number) {
		this.thumbView.step = step;
		this.thumbView.stepPercent = 100 / step;
		this.thumbView.stepCount = (this.ends.max - this.ends.min) / step;
	}
}

export default View;
