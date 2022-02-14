import { SliderFillState } from '../../../utils/interfaces';
import Presenter from '../../Presenter';

function updateFillView(
  this: Presenter,
  { fillSize, fillOffset }: SliderFillState,
) {
  this.view.fillView.setSize(fillSize);
  this.view.fillView.setOffset(fillOffset);
  this.view.fillView.updateFill();
}

export default updateFillView;
