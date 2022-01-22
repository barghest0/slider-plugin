import View from "../View/View";
import TrackModel from "../Model/TrackModel";
import { Direction, SliderParams } from "../Interfaces/interfaces";
import ThumbModel from "../Model/ThumbModel";
import clearHTML from "./PresenterModules/clearHTML";
import removeListeners from "./PresenterModules/removeListeners";
import subscribe from "./PresenterModules/subscribe";
import updateThumbModelBeforeTrackClick from "./PresenterModules/notifyModelMethods/updateTumbModelBeforeTrackClick";
import updateTrackFillModel from "./PresenterModules/notifyModelMethods/updateTrackFillModel";
import updateThumbView from "./PresenterModules/notifyViewMethods/updateThumbView";
import updateTipView from "./PresenterModules/notifyViewMethods/updateTipView";
import updateTrackFillView from "./PresenterModules/notifyViewMethods/updateTrackFillView";
import updateThumbModel from "./PresenterModules/notifyModelMethods/updateThumbModel";
import addListeners from './PresenterModules/notifyViewMethods/addListeners';
class Presenter {
	public root: string;
	public view: View;
	public thumbs: ThumbModel[];
	public trackModel: TrackModel;
	public updateThumbModel: (
		stance: number,
		cursorCoordinate: number,
		direction: Direction,
		size: number
	) => void;
	public updateTrackFillModel: (direction: Direction) => void;
	public updateThumbModelBeforeTrackClick: (cursorCoordinate: number) => void;
	public updateThumbView: (
		value: number,
		offset: number,
		stance: number
	) => void;
	public updateTipView: (
		value: number,
		offset: number,
		stance: number
	) => void;
	public updateTrackFillView: (
		size: number,
		offset: number,
		direction: Direction
	) => void;
	public params: SliderParams;
	private thumbStance: number;
	private clearHTML: (direction: Direction) => void;
	private removeListeners: () => void;
	private addListeners: (isRange: boolean) => void;
	private subscribe: () => void;
	constructor(root: string, params: SliderParams) {
		this.root = root;
		this.trackModel = new TrackModel(root);
		this.view = new View(root);
		this.thumbs = [];
		this.params = params;
		this.thumbStance = 0;
		this.clearHTML = clearHTML.bind(this);
		this.removeListeners = removeListeners.bind(this);
		this.subscribe = subscribe.bind(this);
		this.updateThumbModelBeforeTrackClick =
			updateThumbModelBeforeTrackClick.bind(this);
		this.updateThumbModel = updateThumbModel.bind(this);
		this.updateTrackFillModel = updateTrackFillModel.bind(this);
		this.updateThumbView = updateThumbView.bind(this);
		this.updateTipView = updateTipView.bind(this);
		this.addListeners = addListeners.bind(this);
		this.updateTrackFillView = updateTrackFillView.bind(this);
	}

	public init(params: SliderParams, mode: string) {
		if (mode === "rebuild") {
			this.params = params;
			this.view.isRange = false;
			this.removeListeners();
			this.clearHTML(params.direction);
			this.thumbStance = 0;
			this.thumbs = [];
		}
		$(document).ready(() => {
			this.setTrackModelState(params).setViewState();
		});
		this.createRangeSlider(params);
		this.addSliderClasses(params.direction);
		this.subscribe();
		this.addListeners(params.isRange);
	}

	private setTrackModelState({
		min,
		max,
		isRange,
		direction,
		hasFill,
		hasTips,
		hasScale,
	}: SliderParams) {
		const size =
			direction === "horizontal"
				? $(this.root).width()!
				: $(this.root).height()!;
		this.trackModel.setSize(size);
		this.trackModel.setEnds({ min, max });
		this.trackModel.setIsRange(isRange);
		this.trackModel.setDirection(direction);
		this.trackModel.setSubViews(hasFill, hasTips, hasScale);
		return this;
	}

	private setViewState() {
		this.view.setState(this.trackModel.getState());
		return this;
	}

	private addSliderClasses(direction: Direction) {
		$(this.root).addClass(`slider_${direction}`);
		$(this.root).parent().addClass(`slider-parent_${direction}`);
	}

	private createSlider(
		{
			step,
			value,
			min,
			max,
			direction,
			hasTips,
			isDecimal,
			decimalPlaces,
		}: SliderParams,
		stance: number
	) {
		this.createThumb(stance);
		this.view.prepareDirectionForInteraction(direction);
		this.setThumbModelState(stance, step, Array.isArray(value) ? value[stance] : value, min, max, isDecimal, decimalPlaces, direction);
		this.createThumbView(stance);
		this.creteTipView(direction, stance, hasTips);
		this.setThumbView(stance);
		this.setThumbPlacement(stance);
		this.setTipPlacement(stance);
	}

	private createRangeSlider(params: SliderParams) {
		
		this.createSubViewsView(this.params);
		this.createSlider(params, this.thumbStance);

		if (params.isRange) {
			this.thumbStance += 1;
			this.createSlider(params, this.thumbStance);
		}

		this.setTrackFillModel(params.direction);
		this.setTrackFillView();
		this.setTrackFillPlacement(params.direction);
		return this;
	}

	private setThumbModelState(
		stance: number,
		step: number,
		value: number,
		min: number,
		max: number,
		isDecimal: boolean,
		decimalPlaces: number,
		direction: Direction
	) {
		this.thumbs.forEach((thumb) => {
			thumb.setStep(step, { min, max });
		});
		this.thumbs[stance].setStance(stance);
		this.thumbs[stance].setValue(value);
		this.thumbs[stance].setOffset(
			this.thumbs[stance].calculateOffset({ min, max }, direction)
		);
		this.thumbs[stance].setIsDecimal(isDecimal, decimalPlaces);
		return this;
	}


	private setThumbView(stance: number) {
		const { step, stepCount, stepPercent, value, offset, isDecimal, decimalPlaces } = this.thumbs[stance].getState();
		this.view.thumbView.setStep(step, stepPercent, stepCount);
		this.view.thumbView.setValue(value, stance);
		this.view.thumbView.setOffset(offset, stance);
		this.view.thumbView.setIsDecimal(isDecimal, decimalPlaces);
	}

	private setThumbPlacement(stance: number) {
		const { offset } = this.thumbs[stance].getState();
		this.view.initialThumbPlacement(offset, stance);
	}

	private setTrackFillModel(direction: Direction) {
		$(document).ready(() => {
			this.trackModel.setFillSize(
				this.trackModel.calculateFillSize(direction)
			);
			this.trackModel.setFillOffset(
				this.trackModel.calculateFillOffset(direction)
			);
		});
	}

	private setTrackFillView() {
		$(document).ready(() => {
			this.view.setFillState(this.trackModel.getFillState());
		});
	}

	private setTrackFillPlacement(direction: Direction) {
		$(document).ready(() => {
			this.view.initialFillPlacement(direction);
		});
	}

	private setTipPlacement(stance: number) {
		const { offset } = this.thumbs[stance].getState();
		this.view.initialTipPlacement(offset, stance);
	}

	private createThumb(stance: number) {
		this.thumbs.push(new ThumbModel(this.root, stance));
	}

	private createThumbView(stance: number) {
		this.view.thumbView.createThumb(stance);
	}

	private createTrackView(direction: Direction) {
		this.view.trackView.createTrack(direction);
	}

	private createScaleView(direction: Direction, step: number, max: number, min: number, hasScale: boolean) {
		this.view.scaleView.createScale(direction, hasScale);
		this.view.scaleView.createScaleMarks(step, max, min, direction);
	}

	private creteFillView(direction: Direction, hasFill: boolean) {
		this.view.fillView.createFill(direction, hasFill);
	}

	private creteTipView(direction: Direction, stance: number, hasTips: boolean) {
		this.view.tipView.createTip(direction, stance, hasTips);
	}

	private createSubViewsView({ direction, step, max, min, hasFill, hasScale }: SliderParams) {
		$(document).ready(() => {
			this.createTrackView(direction);
			this.createScaleView(direction, step, max, min, hasScale);
			this.creteFillView(direction, hasFill);
		});
	}
}

export default Presenter;
