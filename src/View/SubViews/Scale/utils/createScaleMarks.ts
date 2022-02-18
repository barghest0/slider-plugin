import { SCALE_CLASS } from '../../../../constants/slider';
import { Direction } from '../../../../types/slider';
import Scale from '../Scale';
import prepareScaleData from './prepareScaleData';

function createScaleMarks(
  this: Scale,
  step: number,
  max: number,
  min: number,
  direction: Direction,
) {
  const scaleData = prepareScaleData(min, max, step, direction);

  for (let i = 0; i < scaleData.values.length; i += 1) {
    const mark = document.createElement('div');
    mark.classList.add(`${SCALE_CLASS}-mark`);
    mark.classList.add(`${SCALE_CLASS}-mark_${direction}`);
    mark.dataset.testid = 'test-scale-mark';

    const offset = scaleData.offsets[i];

    mark.style[this.view.offsetDirection] = `${offset}%`;

    const number = document.createElement('div');
    number.classList.add(`${SCALE_CLASS}-number`);
    number.classList.add(`${SCALE_CLASS}-number_${direction}`);
    number.innerHTML = scaleData.values[i].toString();
    mark.appendChild(number);
    this.scale.appendChild(mark);
  }
}

export default createScaleMarks;
