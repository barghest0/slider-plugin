import { Directions, SubscribersNames } from '../../../../utils/interfaces';
import Track from '../Track';

function handleClick(e: any, thisTrack: Track) {
	const { direction } = thisTrack.view;
	const coord = direction === Directions.horizontal ? e.pageX : e.pageY;
	const cursorCoordinate = thisTrack.view.calculateCursorCoordinate(
		coord,
		direction,
		thisTrack.view.DOMroot,
		thisTrack.view.size,
	);
	thisTrack.notify(SubscribersNames.updateThumbModelBeforeTrackClick, cursorCoordinate);
	thisTrack.notify(SubscribersNames.updateTrackFillModel, thisTrack.view.thumbView.getOffset());
}

export default handleClick;
