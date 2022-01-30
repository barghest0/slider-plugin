import Observer from '../Observer/Observer';
import {
  Direction,
  Ends,
  SliderFillState,
  SliderParams,
  SliderTrackState,
} from '../GlobalUtils/interfaces';

class TrackModel extends Observer {
  private DOMroot: HTMLElement;

  public isRange: boolean;

  public direction: Direction;

  public ends: Ends;

  public size: number;

  public fillSize: number;

  public fillOffset: number;

  public hasFill: boolean;

  public hasTips: boolean;

  public hasScale: boolean;

  constructor(DOMroot: HTMLElement) {
    super();
    this.DOMroot = DOMroot;
    this.ends = { min: 1, max: 100 };
    this.size = 200;
    this.isRange = false;
    this.direction = 'horizontal';
    this.fillSize = 0;
    this.fillOffset = 0;
    this.hasFill = true;
    this.hasTips = true;
    this.hasScale = true;
  }

  public setEnds({ min, max }: Ends) {
    this.ends = { min, max };
  }

  public setSize(size: number) {
    this.size = size;
  }

  public setIsRange(isRange: boolean) {
    this.isRange = isRange;
  }

  public setDirection(direction: Direction) {
    this.direction = direction;
  }

  public setSubViews(hasFill: boolean, hasTips: boolean, hasScale: boolean) {
    this.hasScale = hasScale;
    this.hasTips = hasTips;
    this.hasFill = hasFill;
  }

  public calculateFillSize(direction: Direction) {
    let fillSize = 0;
    const thumb0 = this.DOMroot.querySelector('.slider__thumb-0') as HTMLElement;
    const thumb1 = this.DOMroot.querySelector('.slider__thumb-1') as HTMLElement;
    if (this.isRange) {
      if (direction === 'horizontal') {
        fillSize += parseInt(thumb1.style.left, 10) - parseInt(thumb0.style.left, 10);
      } else {
        fillSize += parseInt(thumb0.style.top, 10) - parseInt(thumb1.style.top, 10);
      }
    } else {
      fillSize += parseInt(thumb0.style[direction === 'horizontal' ? 'left' : 'bottom'], 10);
      if (direction === 'vertical') fillSize += parseInt(thumb0.style.height, 10);
    }

    return +(fillSize / this.size * 100).toFixed(1);
  }

  public setFillSize(fillSize: number) {
    this.fillSize = fillSize;
  }

  public calculateFillOffset(direction: Direction) {
    let fillOffset = 0;
    const thumb0 = this.DOMroot.querySelector('.slider__thumb-0') as HTMLElement;
    const thumb1 = this.DOMroot.querySelector('.slider__thumb-1') as HTMLElement;
    if (this.isRange) {
      if (direction === 'horizontal') {
        fillOffset += parseInt(thumb0.style.left, 10);
      } else {
        fillOffset += parseInt(thumb1.style.left, 10);
      }
    } else {
      fillOffset = 0;
    }
    return +((fillOffset / this.size) * 100).toFixed(1);
  }

  public setFillOffset(fillOffset: number) {
    this.fillOffset = fillOffset;
  }

  public updateTrackFill(direction: Direction) {
    this.setFillSize(this.calculateFillSize(direction));
    this.setFillOffset(this.calculateFillOffset(direction));

    this.notify('UpdateTrackFillView', this.fillSize, this.fillOffset, direction);
  }

  public prepareChooseStance(cursorOffset: number) {
    let stance = 0;
    const chooseCorrectStance = cursorOffset > this.fillSize / 2 + this.fillOffset;

    if (chooseCorrectStance) stance = 1;

    if (this.direction === 'vertical') stance = +!stance;

    if (!this.isRange) {
      stance = 0;
    }

    this.notify(
      'UpdateThumbModel',
      stance,
      cursorOffset,
      this.direction,
      this.size,
    );
  }

  public getState(): SliderTrackState {
    return {
      ends: this.ends,
      size: this.size,
      isRange: this.isRange,
      direction: this.direction,
      hasFill: this.hasFill,
      hasTips: this.hasTips,
      hasScale: this.hasScale,
    };
  }

  public getFillSize() {
    return this.fillSize;
  }

  public getFillOffset() {
    return this.fillOffset;
  }

  public getFillState(): SliderFillState {
    return {
      fillSize: this.getFillSize(),
      fillOffset: this.getFillOffset(),
    };
  }
}

export default TrackModel;
