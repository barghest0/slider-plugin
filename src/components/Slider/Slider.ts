import Presenter from 'components/Presenter/Presenter';
import { ModelSubscribersNames, SubscriberFn } from 'components/Observer/types';
import { getValidatedParams } from 'utils/validators';

import { SliderParams, UserSliderParams } from './types';

class Slider {
  private DOMroot: HTMLElement;

  private DOMparent: HTMLElement;

  private presenter: Presenter;

  private params: SliderParams;

  constructor(DOMroot: HTMLElement, params: SliderParams) {
    this.params = params;
    this.DOMroot = DOMroot;
    this.DOMparent = <HTMLElement>DOMroot.parentElement;
    this.presenter = new Presenter(this.params, this.DOMroot, this.DOMparent);
    this.init();
  }

  getParams() {
    return this.params;
  }

  getContainer() {
    return this.DOMroot;
  }

  getParent() {
    return this.DOMparent;
  }

  unsubscribe() {
    this.presenter.unsubscribe();
  }

  updateParams(params: UserSliderParams) {
    this.presenter.rerender(getValidatedParams(params));
    this.params = this.presenter.model.getParams();
  }

  subscribe(onChangeFunction: SubscriberFn) {
    this.presenter.model.subscribe(
      ModelSubscribersNames.getSliderParams,
      onChangeFunction,
    );
  }

  private init() {
    this.presenter.init();
    this.attachResizeListener();
  }

  private handleWindowResize() {
    this.presenter.rerender(this.params);
  }

  private attachResizeListener() {
    window.addEventListener('resize', this.handleWindowResize.bind(this));
  }
}

export default Slider;
