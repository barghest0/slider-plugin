import Presenter from '../Presenter';
import { SINGLE_SLIDER } from '../../Slider/constants';

function removeListeners(this: Presenter) {
  $(this.DOMroot.classList[SINGLE_SLIDER]).off();
}

export default removeListeners;
