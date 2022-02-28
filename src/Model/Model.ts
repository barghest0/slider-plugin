import Observer from '../Observer/Observer';
import {
  Directions,
  SliderFillState,
  SliderParams,
  SubscribersNames,
  UserSliderParams,
} from '../types/slider';
import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  MIN_OFFSET,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
} from '../constants/slider';
import prepareOffset from './ModelModules/prepareOffset';
import endsValidation from './ModelModules/endsValidation';
import validateParams from './ModelModules/validateParams';

class Model extends Observer {
  public DOMroot: HTMLElement;

  public validateParams: (param: UserSliderParams) => SliderParams;

  public endsValidation: (stance: number) => void;

  private prepareOffset: (offset: number) => number;

  private thumbsOffset: number[];

  private fillState: SliderFillState;

  private params: SliderParams;

  private size: number;

  constructor(DOMroot: HTMLElement) {
    super();
    this.DOMroot = DOMroot;
    this.params = DEFAULT_SLIDER_PARAMS;
    this.thumbsOffset = [];
    this.fillState = { fillOffset: 0, fillSize: 0 };
    this.size = 0;
    this.endsValidation = endsValidation.bind(this);
    this.prepareOffset = prepareOffset.bind(this);
    this.validateParams = validateParams.bind(this);
  }

  public setParams(params: UserSliderParams) {
    this.params = this.validateParams(params);
  }

  public updateParams(params: UserSliderParams) {
    this.params = this.validateParams(params);
    this.notify(SubscribersNames.updateParams, this.getParams());
  }

  public setParam(param: string, value: string | number | number[] | boolean) {
    this.params[param] = value;
  }

  public getParams() {
    return this.params;
  }

  public setSize(size: number) {
    this.size = size;
  }

  public getSize() {
    return this.size;
  }

  public setValue(stance: number, value: number) {
    const { decimalPlaces } = this.params;
    this.params.value[stance] = Number(value.toFixed(decimalPlaces));
  }

  public getValue() {
    const { value } = this.params;
    return value;
  }

  public setOffset(stance: number, offset: number) {
    this.thumbsOffset[stance] = offset;
  }

  public getOffset() {
    return this.thumbsOffset;
  }

  public calculateOffset(stance: number) {
    const { min, max, value } = this.params;
    return this.prepareOffset((value[stance] - min) / ((max - min) / 100));
  }

  public updateThumb(stance: number, cursorOffset: number) {
    const directionalCursorOffset = this.prepareOffset(cursorOffset);
    const stepPercent = this.calculateStepPercent();
    const stepOffset = Math.round(directionalCursorOffset / stepPercent) * stepPercent;

    this.setValue(stance, this.calculateValue(stepOffset, stepPercent));

    this.setOffset(stance, this.calculateOffset(stance));

    this.endsValidation(stance);

    this.notify(SubscribersNames.updateThumbView, stance);
  }

  public updateThumbAfterTrackClick(cursorOffset: number) {
    const { direction, isRange } = this.params;
    const { fillOffset, fillSize } = this.getFillState();
    let stance = FIRST_THUMB_STANCE;

    const isSecondThumbNearest = cursorOffset > fillSize / 2 + fillOffset;

    if (isSecondThumbNearest) stance = SECOND_THUMB_STANCE;

    const reversedStance = Number(!stance);

    if (direction === Directions.vertical) stance = reversedStance;

    if (!isRange) stance = FIRST_THUMB_STANCE;

    this.updateThumb(stance, cursorOffset);
  }

  public updateFill() {
    this.setFillState(this.calculateFillState());
    this.notify(SubscribersNames.updateFillView);
  }

  public setFillState(fillState: SliderFillState) {
    this.fillState = fillState;
  }

  public getFillState() {
    return this.fillState;
  }

  public calculateFillState() {
    const { isRange, direction } = this.params;
    let fillOffset = 0;
    let fillSize = 0;
    if (isRange) {
      fillSize =
        direction === Directions.horizontal
          ? this.thumbsOffset[SECOND_OFFSET] - this.thumbsOffset[FIRST_OFFSET]
          : this.thumbsOffset[FIRST_OFFSET] - this.thumbsOffset[SECOND_OFFSET];
      fillOffset =
        direction === Directions.horizontal
          ? this.thumbsOffset[FIRST_OFFSET]
          : this.thumbsOffset[SECOND_OFFSET];
    } else {
      fillOffset = MIN_OFFSET;
      fillSize = this.prepareOffset(this.thumbsOffset[FIRST_OFFSET]);
    }
    return { fillOffset, fillSize };
  }

  private calculateStepPercent() {
    const { max, min, step } = this.params;
    const stepCount = (max - min) / step;
    return 100 / stepCount;
  }

  private calculateValue(stepOffset: number, stepPercent: number) {
    const { step, min } = this.params;
    return (stepOffset / stepPercent) * step + min;
  }
}

export default Model;
