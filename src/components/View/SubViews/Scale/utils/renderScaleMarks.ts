import prepareScaleData from './prepareScaleData';

import Scale from '../Scale';
import { LINE_CLASS, MARK_CLASS, MARK_NUMBER_CLASS } from '../constants';

import { Direction } from 'components/Slider/types';
import { PREFIX } from 'components/Slider/constants';

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

    const line = document.createElement('div');
    line.classList.add(LINE_CLASS);
    line.classList.add(`${LINE_CLASS}_${direction}`);
    line.classList.add(`${PREFIX}-${LINE_CLASS}_${direction}`);

    const offset = scaleData.offsets[i];

    mark.style[this.view.offsetDirection] = `${offset}%`;

    const number = document.createElement('div');
    number.classList.add(MARK_NUMBER_CLASS);
    number.classList.add(`${MARK_NUMBER_CLASS}_${direction}`);
    number.classList.add(`${PREFIX}-${MARK_NUMBER_CLASS}_${direction}`);
    number.innerHTML = scaleData.values[i].toString();

    mark.appendChild(line);
    mark.appendChild(number);
    this.scale.appendChild(mark);
  }
}

export default renderScaleMarks;
