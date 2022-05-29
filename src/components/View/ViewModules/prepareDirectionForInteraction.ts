import View from 'components/View/View';

import {
  Direction,
  Directions,
  FillDirections,
  OffsetDirections,
} from 'components/Slider/types';

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
