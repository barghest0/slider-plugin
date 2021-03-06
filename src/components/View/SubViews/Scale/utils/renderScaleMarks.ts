import { Direction } from 'components/Slider/types';
import { PREFIX } from 'components/Slider/constants';

import Scale from '../Scale';
import { LINE_CLASS, MARK_CLASS, MARK_NUMBER_CLASS } from '../constants';
import prepareScaleData from './prepareScaleData';

function renderScaleMarks(
  this: Scale,
  step: number,
  max: number,
  min: number,
  direction: Direction,
) {
  const scaleData = prepareScaleData(min, max, step, direction);
  const makeHandleClickCursorOffset =
    (offset: number) => (event: PointerEvent) => {
      this.handleScaleMarkClick(event, offset);
    };

  for (let i = 0; i < scaleData.values.length; i += 1) {
    const mark = document.createElement('div');
    mark.classList.add(MARK_CLASS);
    mark.classList.add(`${MARK_CLASS}_${direction}`);
    mark.classList.add(`${PREFIX}-${MARK_CLASS}_${direction}`);

    const line = document.createElement('div');
    line.classList.add(LINE_CLASS);
    line.classList.add(`${LINE_CLASS}_${direction}`);
    line.classList.add(`${PREFIX}-${LINE_CLASS}_${direction}`);
    const offsetValue = scaleData.offsets[i];
    const offset = offsetValue;

    mark.style[this.view.offsetDirection] = `${offset}%`;

    const markNumber = document.createElement('div');
    markNumber.classList.add(MARK_NUMBER_CLASS);
    markNumber.classList.add(`${MARK_NUMBER_CLASS}_${direction}`);
    markNumber.classList.add(`${PREFIX}-${MARK_NUMBER_CLASS}_${direction}`);
    const markNumberValue = scaleData.values[i];
    markNumber.innerHTML = markNumberValue.toString();
    markNumber.addEventListener(
      'pointerdown',
      makeHandleClickCursorOffset(offsetValue),
    );

    mark.appendChild(line);
    mark.appendChild(markNumber);
    this.scale.appendChild(mark);
  }
}

export default renderScaleMarks;
