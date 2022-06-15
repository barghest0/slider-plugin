import Presenter from 'components/Presenter/Presenter';
import { MAIN_CLASS, PARENT_CLASS, PREFIX } from 'components/Slider/constants';
import { Directions } from 'components/Slider/types';

function clearHTML(this: Presenter) {
  const { direction } = this.getParams();

  const prevDirection =
    direction === Directions.horizontal
      ? Directions.vertical
      : Directions.horizontal;

  this.DOMroot.classList.remove(`${MAIN_CLASS}_${prevDirection}`);
  this.DOMroot.classList.remove(`${PREFIX}-${MAIN_CLASS}_${prevDirection}`);
  this.DOMparent.classList.remove(`${PARENT_CLASS}_${prevDirection}`);

  this.DOMroot.innerHTML = '';
}

export default clearHTML;
