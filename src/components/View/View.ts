import Thumb from './SubViews/Thumb/Thumb';
import Scale from './SubViews/Scale/Scale';
import Fill from './SubViews/Fill/Fill';
import Track from './SubViews/Track/Track';
import Tip from './SubViews/Tip/Tip';

import {
  Direction,
  FillDirection,
  FillDirections,
  OffsetDirection,
  OffsetDirections,
  SliderParams,
} from '../Slider/types';

import { DEFAULT_SLIDER_PARAMS } from '../Slider/constants';

import prepareDirectionForInteraction from './ViewModules/prepareDirectionForInteraction';
import calculateCursorOffset from './ViewModules/calculateCursorOffset';

class View {
  thumbView: Thumb;

  trackView: Track;

  scaleView: Scale;

  tipView: Tip;

  fillView: Fill;

  DOMroot: HTMLElement;

  offsetDirection: OffsetDirection;

  fillDirection: FillDirection;

  prepareDirectionForInteraction: (direction: Direction) => void;

  calculateCursorOffset: (
    coordinate: number,
    direction: Direction,
    DOMroot: HTMLElement,
    size: number,
  ) => number;

  private params: SliderParams;

  private size: number;

  constructor(DOMroot: HTMLElement) {
    this.DOMroot = DOMroot;
    this.thumbView = new Thumb(this);
    this.trackView = new Track(this);
    this.scaleView = new Scale(this);
    this.fillView = new Fill(this);
    this.tipView = new Tip(this);
    this.params = DEFAULT_SLIDER_PARAMS;
    this.size = 0;
    this.offsetDirection = OffsetDirections.left;
    this.fillDirection = FillDirections.width;
    this.prepareDirectionForInteraction = prepareDirectionForInteraction.bind(this);
    this.calculateCursorOffset = calculateCursorOffset.bind(this);
  }

  setParams(params: SliderParams) {
    this.params = params;
  }

  setParam<T extends keyof SliderParams>(param: T, value: SliderParams[T]) {
    this.params[param] = value;
  }

  setSize(size: number) {
    this.size = size;
  }

  getParams() {
    return this.params;
  }

  getSize() {
    return this.size;
  }

  setValue(stance: number, value: number) {
    this.params.value[stance] = value;
  }

  getValue() {
    return this.params.value;
  }
}
export default View;
