import Thumb from "./ViewElements/Thumb/Thumb";
import Track from "./ViewElements/Track/Track";
import Observer from "../Observer/Observer";
import Scale from "./ViewElements/Scale/Scale";
class View extends Observer {
	private thumbView: Thumb;
	private trackView: Track;
	private scaleView: Scale;
	public trackField: JQuery<HTMLElement>;
	constructor(sliderClass: string) {
		super();
		this.thumbView = new Thumb(this);
		this.trackView = new Track(this);
		this.scaleView = new Scale(this);
		this.trackField = $(sliderClass);
	}
	public createViewSlider() {
		this.thumbView.createThumb();
		this.scaleView.createScale();
	}
}

export default View;
