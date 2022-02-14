import { tsImportEqualsDeclaration } from '@babel/types';
import View from '../View/View';

import {
  Direction,
  Directions,
  InitMods,
  SliderFillState,
  SliderParams,
} from '../utils/interfaces';
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
} from '../utils/constants';
import Model from '../Model/Model';
import updateThumbBeforeTrackClick from './PresenterModules/notifyModelMethods/updateThumbBeforeTrackClick';
import updateThumb from './PresenterModules/notifyModelMethods/updateThumb';
import updateFill from './PresenterModules/notifyModelMethods/updateFill';
import updateThumbView from './PresenterModules/notifyViewMethods/updateThumbView';

class Presenter {
  public root: string;

  public DOMroot: HTMLElement;

  public DOMparent: HTMLElement;

  public view: View;

  public model: Model;

  public updateThumb: (
    stance: number,
    cursorOffset: number,
    direction: Direction,
  ) => void;

  public updateFill: (offset: number[]) => void;

  public updateThumbBeforeTrackClick: (
    cursorOffset: number,
    size: number,
  ) => void;

  public updateThumbView: (
    stance: number,
    value: number,
    offset: number,
  ) => void;

  public updateTipView: (stance: number, value: number, offset: number) => void;

  public updateFillView: (state: SliderFillState) => void;

  public params: SliderParams;

  public clearHTML: (direction: Direction) => void;

  private thumbStance: number;

  private removeListeners: () => void;

  private addListeners: (isRange: boolean) => void;

  private subscribe: () => void;

  constructor(root: string, params: SliderParams) {
    this.root = root;
    this.DOMroot = <HTMLElement>document.querySelector(root);
    this.DOMparent = <HTMLElement>this.DOMroot.parentElement;
    this.model = new Model(this.DOMroot);
    this.view = new View(this.DOMroot);
    this.params = params;
    this.thumbStance = 0;
    this.clearHTML = clearHTML.bind(this);
    this.removeListeners = removeListeners.bind(this);
    this.subscribe = subscribe.bind(this);
    this.updateThumbBeforeTrackClick = updateThumbBeforeTrackClick.bind(this);
    this.updateThumb = updateThumb.bind(this);
    this.updateFill = updateFill.bind(this);
    this.updateThumbView = updateThumbView.bind(this);
    this.updateTipView = updateTipView.bind(this);
    this.addListeners = addListeners.bind(this);
    this.updateFillView = updateFillView.bind(this);
  }

  public init(params: SliderParams, mode: string) {
    if (mode === InitMods.rebuild) {
      this.params = params;
      this.removeListeners();
      this.clearHTML(params.direction);
      this.thumbStance = 0;
      this.view.thumbView.thumbs = [];
      this.view.tipView.tips = [];
    }
    this.addSliderClasses(params.direction);
    this.setModelState(params);
    this.setViewState();
    this.createSlider(params);
    this.subscribe();
    this.addListeners(params.isRange);
  }

  public setModelState(params: SliderParams) {
    this.model.setParams(params);
    const size =
      params.direction === Directions.horizontal
        ? this.DOMroot.getBoundingClientRect().width
        : this.DOMroot.getBoundingClientRect().height;
    this.model.setSize(size);
    return this;
  }

  public setViewState() {
    const size = this.model.getSize();
    this.view.setParams(this.model.getParams());
    this.view.setSize(size);
    return this;
  }

  public updateValues(value: number, stance: number) {
    this.params.value[stance] = value;
    const panel = <HTMLElement>(
      this.DOMparent.parentElement?.querySelector('.slider-panel')
    );
    if (panel) {
      this.updatePanelValues(stance, panel);
    }
  }

  private updatePanelValues(stance: number, panel: HTMLElement) {
    const firstStance = stance === FIRST_THUMB_STANCE;
    if (firstStance) {
      const firstValueInput = <HTMLInputElement>(
        panel.querySelector('.first-value')
      );
      firstValueInput.value = String(this.params.value[stance]);
    } else {
      const secondValueInput = <HTMLInputElement>(
        panel.querySelector('.second-value')
      );
      secondValueInput.value = String(this.params.value[stance]);
    }
  }

  private addSliderClasses(direction: Direction) {
    this.DOMroot.classList.add(`${MAIN_CLASS}_${direction}`);
    this.DOMparent.classList.add(`${PARENT_CLASS}_${direction}`);
  }

  private createSlider(params: SliderParams) {
    this.createThumb(params, this.thumbStance);
    if (params.isRange) {
      this.thumbStance += 1;
      this.createThumb(params, this.thumbStance);
    }
    this.createSubViews(params);
  }

  private renderTrack(direction: Direction) {
    this.view.trackView.createTrack(direction);
  }

  private createThumb(
    { direction, hasTips, isDecimal, decimalPlaces }: SliderParams,
    stance: number,
  ) {
    this.model.setOffset(stance, this.model.calculateOffset(stance));
    this.view.prepareDirectionForInteraction(direction);
    this.renderThumb(stance);
    this.setThumbView(stance);
    this.setThumbPlacement(stance);
    if (hasTips) {
      this.createTip(stance, direction, isDecimal, decimalPlaces);
    }
  }

  private renderThumb(stance: number) {
    this.view.thumbView.createThumb(stance);
  }

  private setThumbView(stance: number) {
    const { value } = this.model.getParams();
    const offset = this.model.getOffset();
    this.view.thumbView.setValue(value[stance], stance);
    this.view.thumbView.setOffset(offset[stance], stance);
  }

  private setThumbPlacement(stance: number) {
    this.view.thumbView.updateThumbPosition(stance);
  }

  private createTip(
    stance: number,
    direction: Direction,
    isDecimal: boolean,
    decimalPlaces: number,
  ) {
    this.renderTip(direction, stance);
    this.setTipView(stance, isDecimal, decimalPlaces);
    this.setTipPlacement(stance);
  }

  private renderTip(direction: Direction, stance: number) {
    this.view.tipView.createTip(direction, stance);
  }

  private setTipView(
    stance: number,
    isDecimal: boolean,
    decimalPlaces: number,
  ) {
    const offset = this.model.getOffset()[stance];
    const value = this.model.getValue()[stance];
    this.view.tipView.setOffset(offset, stance);
    this.view.tipView.setValue(value, stance);
    this.view.tipView.setIsDecimal(isDecimal);
    this.view.tipView.setDecimalPlaces(decimalPlaces);
  }

  private setTipPlacement(stance: number) {
    this.view.tipView.updateTipsPosition(stance);
  }

  private createFill(direction: Direction) {
    this.model.setFillState(this.model.calculateFillState());
    this.renderFill(direction);
    this.setFillView();
    this.setFillPlacement();
  }

  private renderFill(direction: Direction) {
    this.view.fillView.createFill(direction);
  }

  private setFillView() {
    const fillState = this.model.getFillState();
    this.view.fillView.setOffset(fillState.fillOffset);
    this.view.fillView.setSize(fillState.fillSize);
  }

  private setFillPlacement() {
    this.view.fillView.updateFill();
  }

  private createSubViews({
    direction,
    step,
    max,
    min,
    hasFill,
    hasScale,
  }: SliderParams) {
    this.renderTrack(direction);
    if (hasScale) this.renderScale(direction, step, max, min);
    if (hasFill) this.createFill(direction);
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
