import Tip from '../Tip';

function updateTipStyle(this: Tip, stance: number) {
  this.tips[stance].style[this.view.offsetDirection] = `${
    this.getOffset()[stance]
  }%`;
  this.tips[stance].innerHTML = String(this.view.getValue()[stance]);
}

export default updateTipStyle;
