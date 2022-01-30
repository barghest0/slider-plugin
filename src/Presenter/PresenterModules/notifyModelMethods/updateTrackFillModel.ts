import { Direction } from '../../../utils/interfaces';
import Presenter from '../../Presenter';

const updateTrackFillModel = function (
  this: Presenter,
  offset: number[]
) {
  this.trackModel.updateTrackFill(offset);
};

export default updateTrackFillModel;
