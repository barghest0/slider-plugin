import { MARK_CLASS, MARK_NUMBER_CLASS } from '../constants';

import { Direction } from '../../../../Slider/types';

import Scale from '../Scale';

import prepareScaleData from './prepareScaleData';
import { PREFIX } from '../../../../Slider/constants';

function renderScaleMarks(
  this: Scale,
  step: number,
  max: number,
  min: number,
  direction: Direction,
) {
  const scaleData = prepareScaleData(min, max, step, direction);

  for (let i = 0; i < scaleData.values.length; i += 1) {
    const mark = document.createElement('div');
    mark.classList.add(MARK_CLASS);
    mark.classList.add(`${MARK_CLASS}_${direction}`);
    mark.classList.add(`${PREFIX}-${MARK_CLASS}_${direction}`);

    const offset = scaleData.offsets[i];

    mark.style[this.view.offsetDirection] = `${offset}%`;

    const number = document.createElement('div');
    number.classList.add(MARK_NUMBER_CLASS);
    number.classList.add(`${MARK_NUMBER_CLASS}_${direction}`);
    number.classList.add(`${PREFIX}-${MARK_NUMBER_CLASS}_${direction}`);
    number.innerHTML = scaleData.values[i].toString();
    mark.appendChild(number);
    this.scale.appendChild(mark);
  }
}

export default renderScaleMarks;
