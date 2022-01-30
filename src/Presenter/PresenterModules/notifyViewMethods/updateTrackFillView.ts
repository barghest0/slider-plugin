import { Direction } from '../../../GlobalUtils/interfaces';
import Presenter from '../../Presenter';

const updateTrackFillView = function (this: Presenter, size: number, offset: number, direction: Direction) {
  this.view.fillView.setSize(size);
  this.view.fillView.setOffset(offset);
  this.view.fillView.updateFill();
};

export default updateTrackFillView;
