import Thumb from '../Thumb';

function updateThumbStyle(this: Thumb, stance: number) {
  this.thumbs[stance].style[this.view.offsetDirection] = `${this.getOffset()[stance]}%`;
}

export default updateThumbStyle;
