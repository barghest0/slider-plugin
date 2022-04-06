import { FIRST_THUMB_STANCE } from '../../../Slider/constants';

import Presenter from '../../Presenter';

function updatePanelValuesAfterThumbDrag(this: Presenter, stance: number) {
  const value = this.model.getValue()[stance];
  if (stance === FIRST_THUMB_STANCE) {
    this.view.panelView.firstValueInput.value = String(value);
  } else {
    this.view.panelView.secondValueInput.value = String(value);
  }
}

export default updatePanelValuesAfterThumbDrag;
