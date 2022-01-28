import calculateCursorCoordinate from '../../../ViewModules/calculateCursorCoordinate';
import Track from '../Track';

const handleClick = function (
  e: JQuery.MouseDownEvent | JQuery.TouchMoveEvent,
) {
  const { thisTrack } = e.data as { thisTrack: Track; };
  const { direction } = thisTrack.view;
  const coord = direction === 'horizontal' ? e.clientX! : e.clientY!;
  const cursorCoordinate = thisTrack.view.calculateCursorCoordinate(
    coord,
    direction,
    thisTrack.view.root,
    thisTrack.view.size,
  );

  thisTrack.notify('UpdateThumbModelBeforeTrackClick', cursorCoordinate);
  thisTrack.notify('UpdateTrackModelFill', direction);
};

export default handleClick;
