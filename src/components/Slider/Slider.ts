import Presenter from '../Presenter/Presenter';
import Observer from '../Observer/Observer';

import { getValidatedParams } from '../../utils/validators';
import { SliderParams, SubscribersNames, UserSliderParams } from './types';

class Slider extends Observer {
  private DOMroot: HTMLElement;

  private DOMparent: HTMLElement;

  private presenter: Presenter;

  private params: SliderParams;

  constructor(DOMroot: HTMLElement, params: SliderParams) {
    super();
    this.params = params;
    this.DOMroot = DOMroot;
    this.DOMparent = <HTMLElement>DOMroot.parentElement;
    this.presenter = new Presenter(this.params, this.DOMroot, this.DOMparent);
    this.init();
  }

  public getParams() {
    return this.params;
  }

  public getContainer() {
    return this.DOMroot;
  }

  public getParent() {
    return this.DOMparent;
  }

  public unsubscribe() {
    this.presenter.unsubscribe();
  }

  public updateParams(params: UserSliderParams) {
    this.params = getValidatedParams(params);
    this.presenter.model.updateParams(this.getParams());
  }

  private init() {
    this.presenter.init();
    this.attachResizeListener();
    this.presenter.model.subscribe(
      SubscribersNames.updateThumbView,
      this.handleThumbChange.bind(this),
    );
  }

  private attachResizeListener() {
    window.addEventListener('resize', () => this.presenter.rerender(this.params));
  }

  private handleThumbChange() {
    const params = this.presenter.model.getParams();
    if (this.params.onChange) {
      this.params.onChange(params);
    }
  }
}

export default Slider;