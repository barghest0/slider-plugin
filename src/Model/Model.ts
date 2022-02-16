import Observer from '../Observer/Observer';
import {
  Directions,
  SliderFillState,
  SliderParams,
  SubscribersNames,
} from '../utils/interfaces';
import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  MIN_OFFSET,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
} from '../utils/constants';
import prepareOffset from './ModelModules/prepareOffset';
import endsValidation from './ModelModules/endsValidation';

class Model extends Observer {
  public params: SliderParams;

  public DOMroot: HTMLElement;

  private offset: number[];

  private fillState: SliderFillState;

  private size: number;

  private prepareOffset: (offset: number) => number;

  private endsValidation: (stance: number) => void;

  constructor(DOMroot: HTMLElement) {
    super();
    this.DOMroot = DOMroot;
    this.params = DEFAULT_SLIDER_PARAMS;
    this.offset = [];
    this.fillState = { fillOffset: 0, fillSize: 0 };
    this.size = 0;
    this.endsValidation = endsValidation.bind(this);
    this.prepareOffset = prepareOffset.bind(this);
  }

  public setParams(params: SliderParams) {
    this.params = params;
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
    this.offset[stance] = offset;
  }

  public getOffset() {
    return this.offset;
  }

  public calculateOffset(stance: number) {
    const { min, max, value } = this.params;
    return this.prepareOffset((value[stance] - min) / ((max - min) / 100));
  }

  public updateThumb(stance: number, cursorOffset: number) {
    const { value } = this.params;
    const directionalCursorOffset = this.prepareOffset(cursorOffset);
    const stepPercent = this.calculateStepPercent();
    const stepOffset =
      Math.round(directionalCursorOffset / stepPercent) * stepPercent;

    this.setValue(stance, this.calculateValue(stepOffset, stepPercent));

    this.setOffset(stance, this.calculateOffset(stance));

    this.endsValidation(stance);

    this.notify(
      SubscribersNames.updateThumbView,
      stance,
      value[stance],
      this.offset[stance],
    );
    this.notify(
      SubscribersNames.updateTipView,
      stance,
      value[stance],
      this.offset[stance],
    );
    this.notify(SubscribersNames.updateValues, value[stance], stance);
  }

  public updateThumbBeforeTrackClick(cursorOffset: number) {
    const { direction, isRange } = this.params;
    const { fillOffset, fillSize } = this.getFillState();
    let stance = FIRST_THUMB_STANCE;
    const isSecondThumbNearest = cursorOffset > fillSize / 2 + fillOffset;
    if (isSecondThumbNearest) stance = SECOND_THUMB_STANCE;
    const reversedStance = +!stance
    if (direction === Directions.vertical) stance = reversedStance;

    
    if (!isRange) stance = FIRST_THUMB_STANCE;

    this.updateThumb(stance, cursorOffset);
  }

  public updateFill() {
    this.setFillState(this.calculateFillState());
    this.notify(SubscribersNames.updateFillView, this.getFillState());
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
          ? this.offset[SECOND_OFFSET] - this.offset[FIRST_OFFSET]
          : this.offset[FIRST_OFFSET] - this.offset[SECOND_OFFSET];
      fillOffset =
        direction === Directions.horizontal
          ? this.offset[FIRST_OFFSET]
          : this.offset[SECOND_OFFSET];
    } else {
      fillOffset = MIN_OFFSET;
      fillSize = this.prepareOffset(this.offset[FIRST_OFFSET]);
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
