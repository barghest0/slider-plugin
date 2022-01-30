import calculateCursorCoordinate from '../../../ViewModules/calculateCursorCoordinate';
import Thumb from '../Thumb';

const handleDrag = function handleDrag(e: any, { thisThumb, stance }: { thisThumb: Thumb, stance: number; }) {
  const { direction } = thisThumb.view;
  const coord = direction === 'horizontal' ? e.pageX! : e.pageY!;
  const cursorCoordinate = thisThumb.view.calculateCursorCoordinate(coord, direction, thisThumb.view.DOMroot, thisThumb.view.size);
  let currentStance = stance;
  currentStance = thisThumb.view.isRange ? thisThumb.validateCollision(stance) : stance;

  thisThumb.notify('UpdateThumbModel', currentStance, cursorCoordinate, direction, thisThumb.view.size);
  thisThumb.notify('UpdateTrackFillModel', thisThumb.getOffset());
};

export default handleDrag;
