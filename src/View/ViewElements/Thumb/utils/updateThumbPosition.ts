import Thumb from '../Thumb';

function updateThumbPosition(this: Thumb, offset: number, stance: number) {
	this.thumbs[stance].style[this.view.offsetDirection] = `${offset}%`;
}

export default updateThumbPosition;
