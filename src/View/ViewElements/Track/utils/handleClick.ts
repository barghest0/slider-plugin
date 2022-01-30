import calculateCursorCoordinate from '../../../ViewModules/calculateCursorCoordinate';
import Track from '../Track';

const handleClick = function (
  e: JQuery.MouseDownEvent | JQuery.TouchMoveEvent,
) {
  const { thisTrack } = e.data as { thisTrack: Track; };
  const { direction } = thisTrack.view;
  const coord = direction === 'horizontal' ? e.pageX! : e.pageY!;
  const cursorCoordinate = thisTrack.view.calculateCursorCoordinate(
    coord,
    direction,
    thisTrack.view.DOMroot,
    thisTrack.view.size,
  );

  thisTrack.notify('UpdateThumbModelBeforeTrackClick', cursorCoordinate);
  thisTrack.notify('UpdateTrackFillModel', direction);
};

export default handleClick;
