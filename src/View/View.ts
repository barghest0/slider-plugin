import Thumb from './SubViews/Thumb/Thumb';
import Scale from './SubViews/Scale/Scale';
import Fill from './SubViews/Fill/Fill';
import Track from './SubViews/Track/Track';
import Tip from './SubViews/Tip/Tip';
import Panel from './SubViews/Panel/Panel';

import Observer from '../Observer/Observer';

import {
  Direction,
  FillDirection,
  FillDirections,
  OffsetDirection,
  OffsetDirections,
  SliderParams,
} from '../types/slider';

import { DEFAULT_SLIDER_PARAMS } from '../constants/slider';

import prepareDirectionForInteraction from './ViewModules/prepareDirectionForInteraction';
import calculateCursorOffset from './ViewModules/calculateCursorOffset';

class View extends Observer {
  public thumbView: Thumb;

  public trackView: Track;

  public scaleView: Scale;

  public tipView: Tip;

  public fillView: Fill;

  public panelView: Panel;

  public DOMroot: HTMLElement;

  public offsetDirection: OffsetDirection;

  public fillDirection: FillDirection;

  public prepareDirectionForInteraction: (direction: Direction) => void;

  public calculateCursorOffset: (
    coordinate: number,
    direction: Direction,
    DOMroot: HTMLElement,
    size: number,
  ) => number;

  private params: SliderParams;

  private size: number;

  constructor(DOMroot: HTMLElement) {
    super();
    this.DOMroot = DOMroot;
    this.thumbView = new Thumb(this);
    this.trackView = new Track(this);
    this.scaleView = new Scale(this);
    this.fillView = new Fill(this);
    this.tipView = new Tip(this);
    this.panelView = new Panel(this);
    this.params = DEFAULT_SLIDER_PARAMS;
    this.size = 0;
    this.offsetDirection = OffsetDirections.left;
    this.fillDirection = FillDirections.width;
    this.prepareDirectionForInteraction = prepareDirectionForInteraction.bind(this);
    this.calculateCursorOffset = calculateCursorOffset.bind(this);
  }

  public setParams(params: SliderParams) {
    this.params = params;
  }

  public setParam(param: string, value: string | number | number[] | boolean) {
    this.params[param] = value;
  }

  public setSize(size: number) {
    this.size = size;
  }

  public getParams() {
    return this.params;
  }

  public getSize() {
    return this.size;
  }

  public setValue(stance: number, value: number) {
    this.params.value[stance] = value;
  }

  public getValue() {
    return this.params.value;
  }
}
export default View;
