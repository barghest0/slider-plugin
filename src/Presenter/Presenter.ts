import View from '../View/View';
import TrackModel from '../Model/TrackModel';
import { Direction, SliderParams } from '../utils/interfaces';
import ThumbModel from '../Model/ThumbModel';
import clearHTML from './PresenterModules/clearHTML';
import removeListeners from './PresenterModules/removeListeners';
import subscribe from './PresenterModules/subscribe';
import updateThumbModelBeforeTrackClick from './PresenterModules/notifyModelMethods/updateThumbModelBeforeTrackClick';
import updateTrackFillModel from './PresenterModules/notifyModelMethods/updateTrackFillModel';
import updateThumbView from './PresenterModules/notifyViewMethods/updateThumbView';
import updateTipView from './PresenterModules/notifyViewMethods/updateTipView';
import updateTrackFillView from './PresenterModules/notifyViewMethods/updateTrackFillView';
import updateThumbModel from './PresenterModules/notifyModelMethods/updateThumbModel';
import addListeners from './PresenterModules/addListeners';
import { FIRST_THUMB_STANCE } from '../utils/constants';

class Presenter {
	public root: string;

	public DOMroot: HTMLElement;

	public view: View;

	public thumbs: ThumbModel[];

	public trackModel: TrackModel;

	public updateThumbModel: (stance: number, cursorOffset: number, direction: Direction) => void;

	public updateTrackFillModel: (offset: number[]) => void;

	public updateThumbModelBeforeTrackClick: (cursorOffset: number) => void;

	public updateThumbView: (value: number, offset: number, stance: number) => void;

	public updateTipView: (value: number, offset: number, stance: number) => void;

	public updateTrackFillView: (size: number, offset: number, direction: Direction) => void;

	public params: SliderParams;

	public clearHTML: (direction: Direction) => void;

	private thumbStance: number;

	private removeListeners: () => void;

	private addListeners: (isRange: boolean) => void;

	private subscribe: () => void;

	constructor(root: string, params: SliderParams) {
		this.root = root;
		this.DOMroot = <HTMLElement>document.querySelector(root);
		this.trackModel = new TrackModel(this.DOMroot);
		this.view = new View(this.DOMroot);
		this.thumbs = [];
		this.params = params;
		this.thumbStance = 0;
		this.clearHTML = clearHTML.bind(this);
		this.removeListeners = removeListeners.bind(this);
		this.subscribe = subscribe.bind(this);
		this.updateThumbModelBeforeTrackClick = updateThumbModelBeforeTrackClick.bind(this);
		this.updateThumbModel = updateThumbModel.bind(this);
		this.updateTrackFillModel = updateTrackFillModel.bind(this);
		this.updateThumbView = updateThumbView.bind(this);
		this.updateTipView = updateTipView.bind(this);
		this.addListeners = addListeners.bind(this);
		this.updateTrackFillView = updateTrackFillView.bind(this);
	}

	public init(params: SliderParams, mode: string) {
		if (mode === 'rebuild') {
			this.params = params;
			this.view.isRange = false;
			this.removeListeners();
			this.clearHTML(params.direction);
			this.thumbStance = 0;
			this.thumbs = [];
			this.view.thumbView.thumbs = [];
			this.view.tipView.tips = [];
		}
		this.addSliderClasses(params.direction);
		this.setTrackModelState(params);
		this.setViewState();
		this.createSlider(params);
		this.subscribe();
		this.addListeners(params.isRange);
	}

	public setTrackModelState({
		min,
		max,
		isRange,
		direction,
		hasFill,
		hasTips,
		hasScale,
	}: SliderParams) {
		const size =
			direction === 'horizontal'
				? this.DOMroot.getBoundingClientRect().width
				: this.DOMroot.getBoundingClientRect().height;

		this.trackModel.setSize(size);
		this.trackModel.setEnds({ min, max });
		this.trackModel.setIsRange(isRange);
		this.trackModel.setDirection(direction);
		this.trackModel.setSubViews(hasFill, hasTips, hasScale);
		return this;
	}

	public setViewState() {
		this.view.setState(this.trackModel.getState());
		return this;
	}

	public updateThumbsValues(value: number, stance: number) {
		this.params.value[stance] = value;
	}

	private addSliderClasses(direction: Direction) {
		const parent = <HTMLElement>this.DOMroot.parentElement;
		this.DOMroot.classList.add(`slider_${direction}`);
		parent.classList.add(`slider-parent_${direction}`);
	}

	private createThumb(
		{ step, value, min, max, direction, hasTips, isDecimal, decimalPlaces }: SliderParams,
		stance: number,
	) {
		this.createThumbModel(stance);
		this.setThumbModelState(
			stance,
			step,
			Array.isArray(value) ? value[stance] : value,
			min,
			max,
			isDecimal,
			decimalPlaces,
			direction,
		);
		this.renderThumb(stance);
		this.setThumbView(stance, direction);
		this.setThumbPlacement(stance);
		if (hasTips) {
			this.createTip(stance, direction);
		}
	}

	private createTip(stance: number, direction: Direction) {
		this.setTipView(stance);
		this.renderTip(direction, stance);
		this.setTipPlacement(stance);
	}

	private createSlider(params: SliderParams) {
		this.createThumb(params, this.thumbStance);
		this.createSubViewsView(params);

		if (params.isRange) {
			this.thumbStance += 1;
			this.createThumb(params, this.thumbStance);
		}
		this.createTrackFill();
	}

	private createTrackFill() {
		this.setTrackFillModel();
		this.setTrackFillView();
		this.setTrackFillPlacement();
	}

	private setThumbModelState(
		stance: number,
		step: number,
		value: number,
		min: number,
		max: number,
		isDecimal: boolean,
		decimalPlaces: number,
		direction: Direction,
	) {
		this.thumbs.forEach(thumb => {
			thumb.setStep(step, { min, max });
		});
		this.thumbs[stance].setStance(stance);
		this.thumbs[stance].setValue(value);
		this.thumbs[stance].setOffset(this.thumbs[stance].calculateOffset({ min, max }, direction));
		this.thumbs[stance].setIsDecimal(isDecimal, decimalPlaces);
	}

	private setThumbView(stance: number, direction: Direction) {
		const { step, stepCount, stepPercent, value, offset, isDecimal, decimalPlaces } =
			this.thumbs[stance].getState();
		this.view.thumbView.setStep(step, stepPercent, stepCount);
		this.view.thumbView.setValue(value, stance);
		this.view.thumbView.setOffset(offset, stance);
		this.view.thumbView.setIsDecimal(isDecimal, decimalPlaces);
		this.view.prepareDirectionForInteraction(direction);
	}

	private setThumbPlacement(stance: number) {
		const { offset } = this.thumbs[stance].getState();
		this.view.initialThumbPlacement(offset, stance);
	}

	private setTrackFillModel() {
		const offset: number[] = [];
		this.thumbs.forEach(thumb => offset.push(thumb.getState().offset));
		this.trackModel.setFillSize(this.trackModel.calculateFillSize(offset));
		this.trackModel.setFillOffset(this.trackModel.calculateFillOffset(offset));
	}

	private setTrackFillView() {
		this.view.setFillState(this.trackModel.getFillState());
	}

	private setTrackFillPlacement() {
		this.view.initialFillPlacement();
	}

	private setTipPlacement(stance: number) {
		this.view.initialTipPlacement(stance);
	}

	private createThumbModel(stance: number) {
		this.thumbs.push(new ThumbModel(this.DOMroot, stance));
	}

	private renderThumb(stance: number) {
		this.view.thumbView.createThumb(stance);
	}

	private renderTrack(direction: Direction) {
		this.view.trackView.createTrack(direction);
	}

	private renderScale(direction: Direction, step: number, max: number, min: number) {
		this.view.scaleView.createScale(direction);
		this.view.scaleView.createScaleMarks(step, max, min, direction);
	}

	private renderFill(direction: Direction) {
		this.view.fillView.createFill(direction);
	}

	private renderTip(direction: Direction, stance: number) {
		this.view.tipView.createTip(direction, stance);
	}

	private setTipView(stance: number) {
		const offset = this.thumbs[stance].getOffset();
		const value = this.thumbs[stance].getValue();
		this.view.tipView.setOffset(offset, stance);
		this.view.tipView.setValue(value, stance);
	}

	private createSubViewsView({ direction, step, max, min, hasFill, hasScale }: SliderParams) {
		this.renderTrack(direction);
		if (hasScale) this.renderScale(direction, step, max, min);
		if (hasFill) this.renderFill(direction);
	}
}

export default Presenter;
