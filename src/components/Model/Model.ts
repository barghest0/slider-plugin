import Observer from 'components/Observer/Observer';
import {
  ModelObserver,
  ModelSubscribersNames,
} from 'components/Observer/types';
import {
  Directions,
  SliderFillState,
  SliderParams,
} from 'components/Slider/types';
import {
  DEFAULT_SLIDER_PARAMS,
  FIRST_OFFSET,
  FIRST_THUMB_STANCE,
  MAX_DECIMAL_PLACES,
  MAX_PERCENTS,
  MIN_OFFSET,
  MAX_OFFSET,
  SECOND_OFFSET,
  SECOND_THUMB_STANCE,
  MIN_DECIMAL_PLACES,
} from 'components/Slider/constants';

import validateParams from './ModelModules/validateParams';
import endsValidation from './ModelModules/endsValidation';
import validateCollision from './ModelModules/validateCollision';
import prepareOffset from 'utils/prepareOffset';

class Model extends Observer<ModelObserver> {
  DOMroot: HTMLElement;

  validateParams: (params: SliderParams) => SliderParams;

  endsValidation: (stance: number) => void;

  private validateCollision: () => void;

  private activeStance: number;

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
    this.activeStance = 0;
    this.endsValidation = endsValidation.bind(this);
    this.validateParams = validateParams.bind(this);
    this.validateCollision = validateCollision.bind(this);
  }

  setParams(params: SliderParams) {
    this.params = this.validateParams(params);
  }

  setParam<K extends keyof SliderParams>(param: K, value: SliderParams[K]) {
    this.params[param] = value;
  }

  getParams() {
    return this.params;
  }

  setSize(size: number) {
    this.size = size;
  }

  getSize() {
    return this.size;
  }

  setValue(stance: number, value: number) {
    this.params.value[stance] = Number(value.toFixed(MAX_DECIMAL_PLACES));
  }

  getValue() {
    const { value } = this.params;
    return value;
  }

  setOffset(stance: number, offset: number) {
    this.thumbsOffset[stance] = offset;
  }

  getOffset() {
    return this.thumbsOffset;
  }

  setActiveStance(stance: number) {
    this.activeStance = stance;
  }

  getActiveStance() {
    return this.activeStance;
  }

  calculateOffset(stance: number) {
    const { min, max, value, direction } = this.params;

    return prepareOffset(
      (value[stance] - min) / ((max - min) / MAX_PERCENTS),
      direction,
    );
  }

  updateThumb(stance: number, cursorOffset: number) {
    const { isRange, step, direction } = this.params;
    const isDecimalStep = !Number.isInteger(step);

    const directionalCursorOffset = Number(
      prepareOffset(cursorOffset, direction).toFixed(
        isDecimalStep ? MAX_DECIMAL_PLACES : MIN_DECIMAL_PLACES,
      ),
    );

    const stepPercent = this.calculateStepPercent();
    const stepOffset =
      Math.round(directionalCursorOffset / stepPercent) * stepPercent;

    this.setActiveStance(stance);

    this.setValidatedEndValues(
      directionalCursorOffset,
      stepOffset,
      stepPercent,
    );

    this.endsValidation(stance);

    if (isRange) {
      this.validateCollision();
    }

    this.notify(ModelSubscribersNames.updateThumbView);
    if (this.params.hasFill) {
      this.updateFill();
    }
    this.notify(ModelSubscribersNames.getSliderParams, this.getParams());
  }

  updateThumbAfterClick(cursorOffset: number) {
    const { fillOffset, fillSize } = this.getFillState();

    let stance = FIRST_THUMB_STANCE;

    const halfFill = fillSize / 2;
    const isSecondThumbNearest = cursorOffset > halfFill + fillOffset;

    if (isSecondThumbNearest) stance = SECOND_THUMB_STANCE;

    stance = this.chooseCorrectStance(stance);

    this.updateThumb(stance, cursorOffset);
  }

  updateFill() {
    this.setFillState(this.calculateFillState());
    this.notify(ModelSubscribersNames.updateFillView);
  }

  setFillState(fillState: SliderFillState) {
    this.fillState = fillState;
  }

  getFillState() {
    return this.fillState;
  }

  calculateFillState() {
    return {
      fillOffset: this.calculateFillOffset(),
      fillSize: this.calculateFillSize(),
    };
  }

  private setValidatedEndValues(
    cursorOffset: number,
    stepOffset: number,
    stepPercent: number,
  ) {
    const lastPartialGap = MAX_OFFSET - (MAX_OFFSET - stepOffset) / 2;

    if (cursorOffset < lastPartialGap) {
      this.setValue(
        this.activeStance,
        this.calculateValue(stepOffset, stepPercent),
      );
      this.setOffset(
        this.activeStance,
        this.calculateOffset(this.activeStance),
      );
    } else {
      this.setValue(this.activeStance, this.params.max);

      const directionalMaxOffset =
        this.params.direction === Directions.horizontal
          ? MAX_OFFSET
          : MIN_OFFSET;
      this.setOffset(this.activeStance, directionalMaxOffset);
    }
  }

  private chooseCorrectStance(stance: number) {
    const { isRange, direction } = this.getParams();
    if (!isRange) {
      return FIRST_THUMB_STANCE;
    }

    if (direction === Directions.vertical) {
      const reversedStance = Number(!stance);
      return reversedStance;
    }

    return stance;
  }

  private calculateFillSize() {
    const { isRange, direction } = this.params;
    if (isRange) {
      return this.calculateBasedOnDirection(
        this.thumbsOffset[FIRST_OFFSET],
        this.thumbsOffset[SECOND_OFFSET],
      );
    }
    return prepareOffset(this.thumbsOffset[FIRST_OFFSET], direction);
  }

  private calculateBasedOnDirection(firstValue: number, secondValue: number) {
    const { direction } = this.getParams();
    if (direction === Directions.horizontal) {
      return secondValue - firstValue;
    }
    return firstValue - secondValue;
  }

  private calculateFillOffset() {
    const { isRange, direction } = this.params;
    if (isRange) {
      return direction === Directions.horizontal
        ? this.thumbsOffset[FIRST_OFFSET]
        : this.thumbsOffset[SECOND_OFFSET];
    }
    return MIN_OFFSET;
  }

  private calculateStepPercent() {
    const { max, min, step } = this.params;
    const stepCount = (max - min) / step;
    return MAX_PERCENTS / stepCount;
  }

  private calculateValue(stepOffset: number, stepPercent: number) {
    const { step, min } = this.params;
    return (stepOffset / stepPercent) * step + min;
  }
}

export default Model;
