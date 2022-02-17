import { SliderFillState } from '../../../types/slider';
import Presenter from '../../Presenter';

function updateFillView(
  this: Presenter,
  { fillSize, fillOffset }: SliderFillState,
) {
  this.view.fillView.setSize(fillSize);
  this.view.fillView.setOffset(fillOffset);
  this.view.fillView.updateFillStyle();
}

export default updateFillView;
