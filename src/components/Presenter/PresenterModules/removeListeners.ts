import Presenter from 'components/Presenter/Presenter';
import { SINGLE_SLIDER } from 'components/Slider/constants';

function removeListeners(this: Presenter) {
  $(this.DOMroot.classList[SINGLE_SLIDER]).off();
}

export default removeListeners;
