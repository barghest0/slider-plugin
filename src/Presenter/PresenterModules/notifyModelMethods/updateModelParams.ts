import { SliderParams } from '../../../types/slider';
import Presenter from '../../Presenter';

function updateModelParams(this: Presenter, params: SliderParams) {
  this.model.updateParams(params);
}

export default updateModelParams;
