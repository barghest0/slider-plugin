import Thumb from "./ViewElements/Thumb/Thumb";
import Track from "./ViewElements/Track/Track";
import Observer from "../Observer/Observer";
import Scale from "./ViewElements/Scale/Scale";
import Fill from "./ViewElements/Fill/Fill";
import {
	Direction,
	IEnds,
	ISliderFillState,
	ISliderTrackState,
} from "../Interfaces/interfaces";
import initialThumbPlacement from "./ViewModules/initialThumbPlacement";
import initialFillPlacement from "./ViewModules/initialFillPlacement";
import Tip from './ViewElements/Tip/Tip';
import initialTipPlacement from './ViewModules/initialTipPlacement';

class View extends Observer {
	public thumbView: Thumb;
	public trackView: Track;
	public scaleView: Scale;
	public tipView: Tip;
	public fillView: Fill;
	public ends: IEnds;
	public parent: JQuery<HTMLElement>;
	public isRange: boolean;
	public direction: Direction;
	public size: number;
	public initialThumbPlacement: (
		direction: Direction,
		stance: number
	) => void;
	public initialFillPlacement: (direction: Direction) => void;
	public initialTipPlacement: (direction: Direction, stance: number) => void;


	constructor(sliderClass: string) {
		super();
		this.thumbView = new Thumb(this);
		this.trackView = new Track(this);
		this.scaleView = new Scale(this);
		this.fillView = new Fill(this);
		this.tipView = new Tip(this);
		this.parent = $(sliderClass);
		this.ends = { min: 0, max: 0 };
		this.size = 200;
		this.isRange = false;
		this.direction = "horizontal";
		this.initialThumbPlacement = initialThumbPlacement.bind(this);
		this.initialFillPlacement = initialFillPlacement.bind(this);
		this.initialTipPlacement = initialTipPlacement.bind(this);


	}

	public setState({ isRange, direction, ends, size }: ISliderTrackState) {
		this.ends = ends;
		this.size = size;
		this.isRange = isRange;
		this.direction = direction;
	}

	public setFillState({ fillSize, fillOffset }: ISliderFillState) {
		this.fillView.setSize(fillSize);
		this.fillView.setOffset(fillOffset);
	}
}
export default View;
