import Tip from '../Tip';

function updateTipText(this: Tip, stance: number) {
  this.tips[stance].innerHTML = String(this.view.getValue()[stance]);
}

export default updateTipText;
