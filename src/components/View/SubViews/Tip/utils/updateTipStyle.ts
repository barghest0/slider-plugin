import Tip from '../Tip';

function updateTipStyle(this: Tip, stance: number) {
  this.tips[stance].style[this.view.offsetDirection] = `${this.getOffset()[stance]}%`;
  this.tips[stance].innerHTML = this.view
    .getValue()
    [stance].toFixed(this.view.getParams().decimalPlaces);
}

export default updateTipStyle;
