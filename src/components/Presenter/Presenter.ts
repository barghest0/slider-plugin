import clearHTML from './PresenterModules/clearHTML';
import removeListeners from './PresenterModules/removeListeners';
import subscribe from './PresenterModules/subscribe';
import updateTipView from './PresenterModules/notifyViewMethods/updateTipView';
import updateFillView from './PresenterModules/notifyViewMethods/updateFillView';
import addListeners from './PresenterModules/addListeners';
import updateThumbAfterTrackClick from './PresenterModules/notifyModelMethods/updateThumbAfterTrackClick';
import updateThumb from './PresenterModules/notifyModelMethods/updateThumb';
import updateThumbView from './PresenterModules/notifyViewMethods/updateThumbView';
import unsubscribe from './PresenterModules/unsubscribe';
import getSliderParams from './PresenterModules/getSliderParams';

import View from 'components/View/View';
import Model from 'components/Model/Model';

import {
  Direction,
  Directions,
  SliderFillState,
  SliderParams,
} from 'components/Slider/types';
import {
  FIRST_THUMB_STANCE,
  MAIN_CLASS,
  PARENT_CLASS,
  SECOND_THUMB_STANCE,
} from 'components/Slider/constants';

class Presenter {
  DOMroot: HTMLElement;

  DOMparent: HTMLElement;

  view: View;

  model: Model;

  updateThumb: () => void;

  updateThumbAfterTrackClick: () => void;

  updateThumbView: () => void;

  updateTipView: () => void;

  updateFillView: () => void;

  getSliderParams: (params: SliderParams) => SliderParams;

  subscribe: () => void;

  unsubscribe: () => void;

  clearHTML: () => void;

  private params: SliderParams;

  private addListeners: () => void;

  private removeListeners: () => void;

  constructor(
    params: SliderParams,
    DOMroot: HTMLElement,
    DOMparent: HTMLElement,
  ) {
    this.DOMroot = DOMroot;
    this.DOMparent = DOMparent;
    this.model = new Model(this.DOMroot);
    this.view = new View(this.DOMroot);
    this.params = params;
    this.clearHTML = clearHTML.bind(this);
    this.removeListeners = removeListeners.bind(this);
    this.subscribe = subscribe.bind(this);
    this.unsubscribe = unsubscribe.bind(this);
    this.updateThumbAfterTrackClick = updateThumbAfterTrackClick.bind(this);
    this.updateThumb = updateThumb.bind(this);
    this.updateThumbView = updateThumbView.bind(this);
    this.updateTipView = updateTipView.bind(this);
    this.updateFillView = updateFillView.bind(this);
    this.addListeners = addListeners.bind(this);
    this.getSliderParams = getSliderParams.bind(this);
  }

  init() {
    this.setParams(this.params);

    this.createSlider();
    this.subscribe();
    this.addListeners();
  }

  rerender(params: SliderParams) {
    this.setParams(params);

    this.view.thumbView.thumbs = [];
    this.view.tipView.tips = [];
    this.unsubscribe();
    this.clearHTML();
    this.removeListeners();

    this.createSlider();
    this.subscribe();
    this.addListeners();
  }

  setParams(params: SliderParams) {
    this.params = params;
  }

  getParams() {
    return this.params;
  }

  private createSlider() {
    this.addSliderClasses(this.params.direction)
      .setModelState()
      .setViewState()
      .setSubViewsState()
      .renderSlider();
  }

  private setModelState() {
    this.model.setParams(this.params);
    const size =
      this.model.getParams().direction === Directions.horizontal
        ? this.DOMroot.offsetWidth
        : this.DOMroot.offsetHeight;

    this.model.setSize(size);
    this.model.getParams().value.forEach((_, stance) => {
      this.model.setOffset(stance, this.model.calculateOffset(stance));
    });

    this.model.setFillState(this.model.calculateFillState());

    return this;
  }

  private addSliderClasses(direction: Direction) {
    this.DOMroot.classList.add(MAIN_CLASS);
    this.DOMroot.classList.add(`js-${MAIN_CLASS}`);
    this.DOMroot.classList.add(`${MAIN_CLASS}_${direction}`);
    this.DOMroot.classList.add(`js-${MAIN_CLASS}_${direction}`);
    this.DOMparent.classList.add(`${PARENT_CLASS}_${direction}`);

    return this;
  }

  private setViewState() {
    this.view.setParams(this.model.getParams());
    this.view.setSize(this.model.getSize());
    this.view.prepareDirectionForInteraction(this.model.getParams().direction);

    return this;
  }

  private setSubViewsState() {
    const { hasFill } = this.model.getParams();
    const value = this.model.getValue();
    const fillState = this.model.getFillState();

    value.forEach((_, stance) => {
      this.setThumbViewState(stance);
    });

    if (hasFill) this.setFillViewState(fillState);

    return this;
  }

  private setThumbViewState(stance: number) {
    const offset = this.model.getOffset()[stance];
    this.view.thumbView.setOffset(stance, offset);
  }

  private setFillViewState(state: SliderFillState) {
    this.view.fillView.setState(state);
  }

  private renderSlider() {
    const { direction, hasFill, hasScale, hasTips, isRange } =
      this.model.getParams();
    this.renderTrack(direction);
    this.renderThumb(FIRST_THUMB_STANCE);

    if (hasTips) this.renderTip(FIRST_THUMB_STANCE, direction);
    if (hasScale) this.renderScale(direction);
    if (hasFill) this.renderFill(direction);
    if (isRange) {
      this.renderThumb(SECOND_THUMB_STANCE);
      if (hasTips) this.renderTip(SECOND_THUMB_STANCE, direction);
    }
  }

  private renderTrack(direction: Direction) {
    this.view.trackView.renderTrack(direction);
  }

  private renderThumb(stance: number) {
    this.view.thumbView.renderThumb(stance);
  }

  private renderTip(stance: number, direction: Direction) {
    this.view.tipView.renderTip(stance, direction);
  }

  private renderFill(direction: Direction) {
    this.view.fillView.renderFill(direction);
  }

  private renderScale(direction: Direction) {
    const { step, max, min } = this.model.getParams();
    this.view.scaleView.renderScale(direction);
    this.view.scaleView.renderScaleMarks(step, max, min, direction);
  }
}

export default Presenter;
