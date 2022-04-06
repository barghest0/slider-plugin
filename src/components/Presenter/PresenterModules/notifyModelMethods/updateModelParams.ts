import { SliderParams } from '../../../Slider/types';

import Presenter from '../../Presenter';

function updateModelParams(this: Presenter, params: SliderParams) {
  this.model.updateParams(params);
}

export default updateModelParams;
