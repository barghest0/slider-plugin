import Thumb from "./ViewElements/Thumb/Thumb";
import Track from "./ViewElements/Track/Track";
import Observer from "../Observer/Observer";
import Scale from "./ViewElements/Scale/Scale";
import Fill from "./ViewElements/Fill/Fill";
import {
	Direction,
	Ends,
	SliderFillState,
	SliderTrackState,
} from "../Interfaces/interfaces";
import initialThumbPlacement from "./ViewModules/initialThumbPlacement";
import initialFillPlacement from "./ViewModules/initialFillPlacement";
import Tip from "./ViewElements/Tip/Tip";
import initialTipPlacement from "./ViewModules/initialTipPlacement";
import prepareDirectionForInteraction from "./ViewModules/prepareDirectionForInteraction";

class View extends Observer {
	public thumbView: Thumb;
	public trackView: Track;
	public scaleView: Scale;
	public tipView: Tip;
	public fillView: Fill;
	public ends: Ends;
	public root: string;
	public isRange: boolean;
	public direction: Direction;
	public size: number;
	public hasTips: boolean;
	public hasFill: boolean;
	public hasScale: boolean;
	public offsetDirection: string;
	public fillDirection: string;
	public initialThumbPlacement: (offset: number, stance: number) => void;
	public initialFillPlacement: (direction: Direction) => void;
	public initialTipPlacement: (offset: number, stance: number) => void;
	public prepareDirectionForInteraction: (direction: Direction) => void;
	constructor(root: string) {
		super();
		this.thumbView = new Thumb(this);
		this.trackView = new Track(this);
		this.scaleView = new Scale(this);
		this.fillView = new Fill(this);
		this.tipView = new Tip(this);
		this.root = root;
		this.ends = { min: 0, max: 0 };
		this.size = 200;
		this.isRange = false;
		this.direction = "horizontal";
		this.hasFill = true;
		this.hasTips = true;
		this.hasScale = true;
		this.offsetDirection = "left";
		this.fillDirection = "width";
		this.initialThumbPlacement = initialThumbPlacement.bind(this);
		this.initialFillPlacement = initialFillPlacement.bind(this);
		this.initialTipPlacement = initialTipPlacement.bind(this);
		this.prepareDirectionForInteraction =
			prepareDirectionForInteraction.bind(this);
	}

	public setState({
		isRange,
		direction,
		ends,
		size,
		hasTips,
		hasScale,
		hasFill,
	}: SliderTrackState) {
		this.ends = ends;
		this.size = size;
		this.isRange = isRange;
		this.direction = direction;
		this.hasTips = hasTips;
		this.hasFill = hasFill;
		this.hasScale = hasScale;
	}

	public setFillState({ fillSize, fillOffset }: SliderFillState) {
		this.fillView.setSize(fillSize);
		this.fillView.setOffset(fillOffset);
	}
}
export default View;
