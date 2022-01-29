import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateThumbPosition from './utils/updateThumbPosition';
import validateCollision from './utils/validateCollision';
import dragAndDropThumb from './utils/dragAndDropThumb';

class Thumb extends Observer {
  public view: View;

  public step: number;

  public stepPercent: number;

  public stepCount: number;

  public value: number[];

  public offset: number[];

  public isDecimal: boolean;

  public decimalPlaces: number;

  public activeStance: number;

  public updateThumbPosition: (offset: number, stance: number) => void;

  public validateCollision: (stance: number) => number;

  public dragAndDropThumb: (stance: number) => void;

  constructor(view: View) {
    super();
    this.view = view;
    this.step = 0;
    this.stepPercent = 0;
    this.stepCount = 0;
    this.value = [];
    this.offset = [];
    this.isDecimal = false;
    this.decimalPlaces = 0;
    this.activeStance = 0;
    this.updateThumbPosition = updateThumbPosition.bind(this);
    this.validateCollision = validateCollision.bind(this);
    this.dragAndDropThumb = dragAndDropThumb.bind(this);
  }

  public createThumb(stance: number) {
    const root = document.querySelector(this.view.root);
    const thumb = document.createElement('div');
    thumb.classList.add('slider__thumb');
    thumb.classList.add(`slider__thumb-${stance}`);
    root?.appendChild(thumb);
    thumb.dataset.testid = `test-thumb-${stance}`;
  }

  public setStep(step: number, stepPercent: number, stepCount: number) {
    this.step = step;
    this.stepPercent = stepPercent;
    this.stepCount = stepCount;
  }

  public setValue(value: number, stance: number) {
    this.value[stance] = value;
  }

  public setOffset(offset: number, stance: number) {
    this.offset[stance] = offset;
  }

  public setIsDecimal(isDecimal: boolean, decimalPlaces: number) {
    if (isDecimal) {
      this.decimalPlaces = decimalPlaces;
    } else {
      this.decimalPlaces = 0;
    }
  }

  public getOffset() {
    return this.offset;
  }
}

export default Thumb;
