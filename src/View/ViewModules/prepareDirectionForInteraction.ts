import {
  Direction,
  Directions,
  FillDirections,
  OffsetDirections,
} from '../../utils/interfaces';
import View from '../View';

function prepareDirectionForInteraction(this: View, direction: Direction) {
  this.offsetDirection =
    direction === Directions.horizontal
      ? OffsetDirections.left
      : OffsetDirections.top;
  this.fillDirection =
    direction === Directions.horizontal
      ? FillDirections.width
      : FillDirections.height;
}

export default prepareDirectionForInteraction;
