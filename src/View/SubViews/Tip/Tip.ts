import { Direction } from '../../../types/slider';
import Observer from '../../../Observer/Observer';
import View from '../../View';
import updateTipStyle from './utils/updateTipStyle';
import { TIP_CLASS } from '../../../constants/slider';

class Tip extends Observer {
  public view: View;

  public updateTipStyle: (stance: number) => void;

  public tips: HTMLElement[];

  public decimalPlaces: number;

  public isDecimal: boolean;

  private value: number[];

  private offset: number[];

  constructor(view: View) {
    super();
    this.view = view;
    this.offset = [];
    this.tips = [];
    this.value = [];
    this.decimalPlaces = 0;
    this.isDecimal = false;
    this.updateTipStyle = updateTipStyle.bind(this);
  }

  public setOffset(offset: number, stance: number) {
    this.offset[stance] = offset;
  }

  public getOffset() {
    return this.offset;
  }

  public setValue(value: number, stance: number) {
    this.value[stance] = value;
  }

  public getValue() {
    return this.value;
  }

  public setDecimalPlaces(decimalPlaces: number) {
    if (this.isDecimal) {
      this.decimalPlaces = decimalPlaces;
    } else {
      this.decimalPlaces = 0;
    }
  }

  public setIsDecimal(isDecimal: boolean) {
    this.isDecimal = isDecimal;
  }

  public createTip(direction: Direction, stance: number, hasTip: boolean) {
    if (hasTip) {
      const tip = document.createElement('div');
      tip.classList.add(TIP_CLASS);
      tip.classList.add(`js-${TIP_CLASS}-${stance}`);
      tip.classList.add(`${TIP_CLASS}-${stance}`);
      tip.classList.add(`${TIP_CLASS}_${direction}`);
      this.tips.push(tip);
      this.view.DOMroot.appendChild(tip);
      this.updateTipStyle(stance);
    }
  }
}

export default Tip;
