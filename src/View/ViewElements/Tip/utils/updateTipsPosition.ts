import Tip from '../Tip';

const updateTipsPosition = function (this: Tip, stance: number, offset: number, value: number) {
  this.tips[stance].style[this.view.offsetDirection] = `${offset}%`;
  this.tips[stance].innerHTML = value.toFixed(this.view.thumbView.decimalPlaces);
  
};

export default updateTipsPosition;
