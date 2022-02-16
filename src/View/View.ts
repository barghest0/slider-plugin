import Thumb from './ViewElements/Thumb/Thumb';
import Track from './ViewElements/Track/Track';
import Observer from '../Observer/Observer';
import Scale from './ViewElements/Scale/Scale';
import Fill from './ViewElements/Fill/Fill';
import {
  Direction,
  FillDirection,
  FillDirections,
  OffsetDirection,
  OffsetDirections,
  SliderParams,
} from '../@types/slider';

import prepareDirectionForInteraction from './ViewModules/prepareDirectionForInteraction';
import { DEFAULT_SLIDER_PARAMS } from '../constants/slider';
import calculateCursorOffset from './ViewModules/calculateCursorOffset';
import Tip from './ViewElements/Tip/Tip';

class View extends Observer {
  public thumbView: Thumb;

  public trackView: Track;

  public scaleView: Scale;

  public tipView: Tip;

  public fillView: Fill;

  public DOMroot: HTMLElement;

  public params: SliderParams;

  public offsetDirection: OffsetDirection;

  public fillDirection: FillDirection;

  public size: number;

  public prepareDirectionForInteraction: (direction: Direction) => void;

  public calculateCursorOffset: (
    coordinate: number,
    direction: Direction,
    DOMroot: HTMLElement,
    size: number,
  ) => number;

  constructor(DOMroot: HTMLElement) {
    super();
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
    this.prepareDirectionForInteraction =
      prepareDirectionForInteraction.bind(this);
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
}
export default View;
