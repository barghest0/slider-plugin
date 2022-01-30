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

  public calculateFillSize(offset: number[]) {
    if (this.isRange) {
      return this.direction === "horizontal" ? offset[1] - offset[0] : offset[0] - offset[1];
    } else {
      return this.direction === "horizontal" ? offset[0] : 100 - offset[0];
    }
  }

  public setFillSize(fillSize: number) {
    this.fillSize = fillSize;
  }

  public calculateFillOffset(offset: number[]) {
    if (this.isRange) {
      return this.direction === "horizontal" ? offset[0] : offset[1];
    } else {
      return 0;
    }
  }

  public setFillOffset(fillOffset: number) {
    this.fillOffset = fillOffset;
  }

  public updateTrackFill(offset: number[]) {
    this.setFillSize(this.calculateFillSize(offset));
    this.setFillOffset(this.calculateFillOffset(offset));

    this.notify('UpdateTrackFillView', this.fillSize, this.fillOffset);
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
