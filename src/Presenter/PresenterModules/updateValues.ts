import { FIRST_THUMB_STANCE } from '../../constants/slider';
import Presenter from '../Presenter';

function updatePanelValues(stance: number, panel: HTMLElement, value: number) {
  const firstStance = stance === FIRST_THUMB_STANCE;
  if (firstStance) {
    const firstValueInput = <HTMLInputElement>(
      panel.querySelector('.first-value')
    );
    firstValueInput.value = String(value);
  } else {
    const secondValueInput = <HTMLInputElement>(
      panel.querySelector('.second-value')
    );
    secondValueInput.value = String(value);
  }
}

function updateValues(this: Presenter, stance: number, value: number) {
  this.params.value[stance] = value;
  const panel = <HTMLElement>(
    this.DOMparent.parentElement?.querySelector('.slider-panel')
  );
  if (panel) {
    updatePanelValues(stance, panel, value);
  }
}

export default updateValues;
