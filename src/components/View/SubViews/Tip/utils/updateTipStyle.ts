import Tip from '../Tip';

function updateTipStyle(this: Tip, stance: number) {
  this.tips[stance].innerHTML = String(this.view.getValue()[stance]);
}

export default updateTipStyle;
