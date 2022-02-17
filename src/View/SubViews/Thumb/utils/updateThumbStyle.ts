import Thumb from '../Thumb';

function updateThumbPosition(this: Thumb, stance: number) {
  this.thumbs[stance].style[this.view.offsetDirection] = `${this.getOffset()[stance]
    }%`;
}

export default updateThumbPosition;
