import View from "../View/View";
import TrackModel from "../Model/TrackModel";
import { Direction, SliderParams } from "../Interfaces/interfaces";
import ThumbModel from "../Model/ThumbModel";
import clearHTML from "./PresenterModules/clearHTML";
import removeListeners from "./PresenterModules/removeListeners";
import prepareOffset from '../Model/ThumbModelModules/prepareOffset';

class Presenter {
	public root: string;
	public thumbs: ThumbModel[];
	private trackModel: TrackModel;
	private view: View;
	private params: SliderParams;
	private thumbStance: number;
	private clearHTML: (direction: Direction) => void;
	private removeListeners: () => void;
	constructor(root: string, params: SliderParams) {
		this.root = root;
		this.trackModel = new TrackModel(root);
		this.view = new View(root);
		this.thumbs = [];
		this.params = params;
		this.thumbStance = 0;
		this.init(params, "init");
		this.clearHTML = clearHTML.bind(this);
		this.removeListeners = removeListeners.bind(this);
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

		this.createSlider(params);
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

	private createSlider({
		isRange,
		step,
		value,
		min,
		max,
		direction,
		hasTips,
		isDecimal,
		decimalPlaces,
	}: SliderParams) {
		this.createSubViewsView(this.params);
		this.createThumb(this.thumbStance);
		this.view.prepareDirectionForInteraction(direction);

		this.setThumbModelState(
			this.thumbStance,
			step,
			Array.isArray(value) ? value[0] : value,
			min,
			max,
			isDecimal,
			decimalPlaces,
			direction
		);
		this.createThumbView(this.thumbStance);
		this.creteTipView(direction, this.thumbStance, hasTips);
		this.setThumbViewStateAndPlacement(this.thumbStance);
		this.setTipPlacement(this.thumbStance);

		if (isRange) {
			this.thumbStance += 1;
			this.createThumb(this.thumbStance);
			this.setThumbModelState(
				this.thumbStance,
				step,
				Array.isArray(value) ? value[1] : value,
				min,
				max,
				isDecimal,
				decimalPlaces,
				direction
			);

			this.createThumbView(this.thumbStance);
			this.creteTipView(direction, this.thumbStance, hasTips);
			this.setThumbViewStateAndPlacement(this.thumbStance);
			this.setTipPlacement(this.thumbStance);
		}

		this.setTrackFillAndPlacement(direction);
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
		this.thumbs[stance].setOffset(this.thumbs[stance].calculateOffset({ min, max }, direction));
		this.thumbs[stance].setIsDecimal(isDecimal, decimalPlaces);
		return this;
	}
	private setThumbViewStateAndPlacement(
		stance: number,
	) {
		const {
			step,
			stepCount,
			stepPercent,
			value,
			offset,
			isDecimal,
			decimalPlaces,
		} = this.thumbs[stance].getState();

		this.view.thumbView.setStep(step, stepPercent, stepCount);
		this.view.thumbView.setValue(value, stance);
		this.view.thumbView.setOffset(offset, stance);
		this.view.thumbView.setIsDecimal(isDecimal, decimalPlaces);
		this.view.initialThumbPlacement(stance);

		return this;
	}

	private setTrackFillAndPlacement(direction: Direction) {
		$(document).ready(() => {
			this.trackModel.setFillSize(this.trackModel.calculateFillSize(direction));
			this.trackModel.setFillOffset(this.trackModel.calculateFillOffset(direction));
			this.view.setFillState(this.trackModel.getFillState());
			this.view.initialFillPlacement(direction);
		});
	}

	private setTipPlacement(stance: number) {
		this.view.initialTipPlacement(stance);
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

	private createScaleView(
		direction: Direction,
		step: number,
		max: number,
		min: number,
		hasScale: boolean
	) {
		this.view.scaleView.createScale(direction, hasScale);
		this.view.scaleView.createScaleMarks(step, max, min, direction);
	}

	private creteFillView(direction: Direction, hasFill: boolean) {
		this.view.fillView.createFill(direction, hasFill);
	}

	private creteTipView(
		direction: Direction,
		stance: number,
		hasTips: boolean
	) {
		this.view.tipView.createTip(direction, stance, hasTips);
	}

	private createSubViewsView(params: SliderParams) {
		$(document).ready(() => {
			const { direction, step, max, min, hasFill, hasScale } = params;
			this.createTrackView(direction);
			this.createScaleView(direction, step, max, min, hasScale);
			this.creteFillView(direction, hasFill);
		});
	}

	private addListeners(isRange: boolean) {
		this.view.thumbView.dragThumb(0);
		this.view.trackView.clickTrack();
		this.view.thumbView.dropThumb();
		if (isRange) {
			this.view.thumbView.dragThumb(1);
		}
	}

	private updateTrackFillModelState() {
		this.trackModel.updateTrackFill(this.view.direction);
	}

	private updateTrackFillPosition(size: number, offset: number) {
		this.view.fillView.setSize(size);
		this.view.fillView.setOffset(offset);
	}

	private updateThumbModelValue(stance: number, cursorCoordinate: number, direction: Direction, size: number) {
		this.thumbs[stance].updateThumbValue(
			stance,
			this.view.ends,
			cursorCoordinate,
			direction,
			size
		);
	}

	private updateThumbPosition(value: number, offset: number, stance: number) {
		this.view.thumbView.setOffset(offset, stance);
		this.view.thumbView.setValue(value, stance);
	}

	private subscribe() {
		this.view.thumbView.subscribe(
			"UpdateThumbModelValue",
			this.updateThumbModelValue.bind(this)
		);

		this.view.trackView.subscribe(
			"UpdateThumbModelValue",
			this.updateThumbModelValue.bind(this)
		);

		this.view.trackView.subscribe(
			"UpdateTrackModelFill",
			this.updateTrackFillModelState.bind(this)
		);

		this.trackModel.subscribe(
			"UpdateTrackFillPosition",
			this.updateTrackFillPosition.bind(this)
		);

		this.thumbs.forEach((thumb) =>
			thumb.subscribe(
				"UpdateThumbPosition",
				this.updateThumbPosition.bind(this)
			)
		);
	}
}

export default Presenter;
