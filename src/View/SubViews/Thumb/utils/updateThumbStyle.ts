import Thumb from '../Thumb';

function updateThumbPosition(this: Thumb, stance: number) {
  console.log(this.getOffset()[stance]);

  this.thumbs[stance].style[this.view.offsetDirection] = `${this.getOffset()[stance]
    }%`;
}

export default updateThumbPosition;
