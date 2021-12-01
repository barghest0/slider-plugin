import Thumb from "./ViewElements/Thumb/Thumb";
import Track from "./ViewElements/Track/Track";
import Observer from "../Observer/Observer";
import Scale from "./ViewElements/Scale/Scale";
import Fill from "./ViewElements/Fill/Fill";
import { IEnds } from "../utils/interfaces/interfaces";
class View extends Observer {
	public ends:IEnds;
	public thumbView: Thumb;
	public trackView: Track;
	public scaleView: Scale;
	public fillView: Fill;
	public parent: JQuery<HTMLElement>;
	
	constructor(sliderClass: string) {
		super();
		this.thumbView = new Thumb(this);
		this.trackView = new Track(this);
		this.scaleView = new Scale(this);
		this.fillView = new Fill(this);
		this.parent = $(sliderClass);
		this.ends = {min:0,max:100}
		
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


	public setEnds({min,max}:IEnds){
		this.ends ={min,max}
	}

	public setStep(this:View,step:number){
		this.thumbView.step = step
		this.thumbView.stepPercent = 100/step
		this.thumbView.stepCount = (this.ends.max - this.ends.min)/step
	}
}

export default View;
