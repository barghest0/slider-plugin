import calculateCursorCoordinate from '../../../ViewModules/calculateCursorCoordinate';
import Track from '../Track';

const handleClick = function (
  e: any,
  thisTrack:Track
) {
  const { direction } = thisTrack.view;
  const coord = direction === 'horizontal' ? e.pageX! : e.pageY!;
  const cursorCoordinate = thisTrack.view.calculateCursorCoordinate(
    coord,
    direction,
    thisTrack.view.DOMroot,
    thisTrack.view.size,
  );
  thisTrack.notify('UpdateThumbModelBeforeTrackClick', cursorCoordinate);
  thisTrack.notify('UpdateTrackFillModel', thisTrack.view.thumbView.getOffset());

};

export default handleClick;
