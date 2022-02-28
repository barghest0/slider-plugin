import { UserSliderParams } from '../../../types/slider';
import Presenter from '../../Presenter';

function updateModelParams(this: Presenter, params: UserSliderParams) {
  this.model.updateParams(params);
}

export default updateModelParams;
