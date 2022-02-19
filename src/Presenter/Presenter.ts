import View from '../View/View';
import {
  Direction,
  Directions,
  SliderFillState,
  SliderParams,
} from '../types/slider';
import clearHTML from './PresenterModules/clearHTML';
import removeListeners from './PresenterModules/removeListeners';
import subscribe from './PresenterModules/subscribe';
import updateTipView from './PresenterModules/notifyViewMethods/updateTipView';
import updateFillView from './PresenterModules/notifyViewMethods/updateFillView';
import addListeners from './PresenterModules/addListeners';
import {
  FIRST_THUMB_STANCE,
  MAIN_CLASS,
  PARENT_CLASS,
  SECOND_THUMB_STANCE,
} from '../constants/slider';
import Model from '../Model/Model';
import updateThumbAfterTrackClick from './PresenterModules/notifyModelMethods/updateThumbAfterTrackClick';
import updateThumb from './PresenterModules/notifyModelMethods/updateThumb';
import updateFill from './PresenterModules/notifyModelMethods/updateFill';
import updateThumbView from './PresenterModules/notifyViewMethods/updateThumbView';
import unsubscribe from './PresenterModules/unsubscribe';

class Presenter {
  public root: string;

  public DOMroot: HTMLElement;

  public DOMparent: HTMLElement;

  public view: View;

  public model: Model;

  public params: SliderParams;

  public updateThumb: (
    stance: number,
    cursorOffset: number,
    direction: Direction,
  ) => void;

  public updateFill: (offset: number[]) => void;

  public updateThumbAfterTrackClick: (cursorOffset: number) => void;

  public updateThumbView: (
    stance: number,
    value: number,
    offset: number,
  ) => void;

  public updateTipView: (stance: number, value: number, offset: number) => void;

  public updateFillView: (state: SliderFillState) => void;

  public unsubscribe: () => void;

  public subscribe: () => void;

  public clearHTML: (direction: Direction) => void;

  private addListeners: (isRange: boolean) => void;

  private removeListeners: () => void;

  constructor(root: string, params: SliderParams) {
    this.root = root;
    this.DOMroot = <HTMLElement>document.querySelector(root);
    this.DOMparent = <HTMLElement>this.DOMroot.parentElement;
    this.model = new Model(this.DOMroot);
    this.view = new View(this.DOMroot);
    this.params = params;
    this.clearHTML = clearHTML.bind(this);
    this.removeListeners = removeListeners.bind(this);
    this.subscribe = subscribe.bind(this);
    this.unsubscribe = unsubscribe.bind(this);
    this.updateThumbAfterTrackClick = updateThumbAfterTrackClick.bind(this);
    this.updateThumb = updateThumb.bind(this);
    this.updateFill = updateFill.bind(this);
    this.updateThumbView = updateThumbView.bind(this);
    this.updateTipView = updateTipView.bind(this);
    this.updateFillView = updateFillView.bind(this);
    this.addListeners = addListeners.bind(this);
  }

  public init(params: SliderParams) {
    this.view.thumbView.thumbs = [];
    this.view.tipView.tips = [];
    this.clearHTML(params.direction);
    this.removeListeners();

    this.addSliderClasses(params.direction)
      .setModelState(params)
      .setViewState()
      .setSubViewsState()
      .renderSlider();

    this.subscribe();
    this.addListeners(params.isRange);
  }

  private renderSlider() {
    const { direction, step, max, min, hasFill, hasScale, hasTips, isRange } =
      this.model.getParams();
    this.renderTrack(direction);
    this.renderThumb(FIRST_THUMB_STANCE);
    if (hasTips) this.renderTip(direction, FIRST_THUMB_STANCE);
    if (hasScale) this.renderScale(direction, step, max, min);
    if (hasFill) this.renderFill(direction);
    if (isRange) {
      this.renderThumb(SECOND_THUMB_STANCE);
      if (hasTips) this.renderTip(direction, SECOND_THUMB_STANCE);
    }
  }

  private setModelState(params: SliderParams) {
    this.model.setParams(params);
    const size =
      params.direction === Directions.horizontal
        ? this.DOMroot.offsetWidth
        : this.DOMroot.offsetHeight;
    this.model.setSize(size);
    params.value.forEach((_, index) => {
      this.model.setOffset(index, this.model.calculateOffset(index));
    });
    this.model.setFillState(this.model.calculateFillState());

    return this;
  }

  private setViewState() {
    this.view.setParams(this.model.getParams());
    this.view.setSize(this.model.getSize());
    this.view.prepareDirectionForInteraction(this.model.getParams().direction);

    return this;
  }

  private addSliderClasses(direction: Direction) {
    this.DOMroot.classList.add(`${MAIN_CLASS}_${direction}`);
    this.DOMparent.classList.add(`${PARENT_CLASS}_${direction}`);
    return this;
  }

  private setSubViewsState() {
    const { isDecimal, decimalPlaces, hasTips, hasFill } =
      this.model.getParams();
    const offset = this.model.getOffset();
    const value = this.model.getValue();
    const fillState = this.model.getFillState();
    value.forEach((_, index) => {
      this.setThumbViewState(offset[index], value[index], index);
      if (hasTips)
        this.setTipViewState(
          offset[index],
          value[index],
          index,
          isDecimal,
          decimalPlaces,
        );
    });
    if (hasFill) this.setFillViewState(fillState);
    return this;
  }

  private setThumbViewState(offset: number, value: number, stance: number) {
    this.view.thumbView.setOffset(offset, stance);
    this.view.thumbView.setValue(value, stance);
  }

  private setFillViewState({ fillSize, fillOffset }: SliderFillState) {
    this.view.fillView.setOffset(fillOffset);
    this.view.fillView.setSize(fillSize);
  }

  private setTipViewState(
    offset: number,
    value: number,
    stance: number,
    isDecimal: boolean,
    decimalPlaces: number,
  ) {
    this.view.tipView.setOffset(offset, stance);
    this.view.tipView.setValue(value, stance);
    this.view.tipView.setIsDecimal(isDecimal);
    this.view.tipView.setDecimalPlaces(decimalPlaces);
  }

  private renderTrack(direction: Direction) {
    this.view.trackView.createTrack(direction);
  }

  private renderThumb(stance: number) {
    this.view.thumbView.createThumb(stance);
  }

  private renderTip(direction: Direction, stance: number) {
    this.view.tipView.createTip(direction, stance);
  }

  private renderFill(direction: Direction) {
    this.view.fillView.createFill(direction);
  }

  private renderScale(
    direction: Direction,
    step: number,
    max: number,
    min: number,
  ) {
    this.view.scaleView.createScale(direction);
    this.view.scaleView.createScaleMarks(step, max, min, direction);
  }
}

export default Presenter;
