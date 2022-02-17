import { Direction, Directions } from '../../types/slider';
import Presenter from '../Presenter';

function clearHTML(this: Presenter, direction: Direction) {
  const prevDirection =
    direction === Directions.horizontal
      ? Directions.vertical
      : Directions.horizontal;
  const parent = <HTMLElement>this.DOMroot.parentElement;
  this.DOMroot.classList.remove(`slider_${prevDirection}`);
  parent.classList.remove(`slider-parent_${prevDirection}`);
  this.DOMroot.innerHTML = '';
}

export default clearHTML;
