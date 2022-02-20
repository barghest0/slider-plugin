import { SliderFillState } from '../../../types/slider';
import Presenter from '../../Presenter';

function updateFillView(this: Presenter, state: SliderFillState) {
  this.view.fillView.setState(state);
  this.view.fillView.updateFillStyle();
}

export default updateFillView;
