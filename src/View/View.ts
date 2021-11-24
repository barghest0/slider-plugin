import Thumb from "./ViewElements/Thumb/Thumb";
import Track from "./ViewElements/Track/Track";
import Observer from "../Observer/Observer";
import Scale from "./ViewElements/Scale/Scale";
import Fill from "./ViewElements/Fill/Fill";
class View extends Observer {
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
	}
	public createViewSlider() {
		this.trackView.createTrack();
		this.thumbView.createThumb();
		this.scaleView.createScale();
		this.fillView.createFill()
	}

	public updateViewSlider() {
		this.thumbView.dragThumb();
	}
}

export default View;
