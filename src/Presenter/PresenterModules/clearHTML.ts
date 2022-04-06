import { MAIN_CLASS, PARENT_CLASS } from '../../Slider/constants';

import { Directions } from '../../Slider/types';

import Presenter from '../Presenter';

function clearHTML(this: Presenter) {
  const { direction } = this.model.getParams();
  const prevDirection =
    direction === Directions.horizontal ? Directions.vertical : Directions.horizontal;
  this.DOMroot.classList.remove(`${MAIN_CLASS}_${prevDirection}`);
  this.DOMparent.classList.remove(`${PARENT_CLASS}_${prevDirection}`);
  this.DOMroot.innerHTML = '';
}

export default clearHTML;
