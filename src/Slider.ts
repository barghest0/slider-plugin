import { SliderParams, SubscribersNames } from './types/slider';
import Presenter from './Presenter/Presenter';
import Observer from './Observer/Observer';

class Slider extends Observer {
  public presenter: Presenter;

  public DOMroot: HTMLElement;

  public DOMparent: HTMLElement;

  private params: SliderParams;

  constructor(DOMroot: HTMLElement, params: SliderParams) {
    super();
    this.params = params;
    this.DOMroot = DOMroot;
    this.DOMparent = <HTMLElement>DOMroot.parentElement;
    this.presenter = new Presenter(this.params, this);
    window.addEventListener('load', () => this.init(params));
  }

  public setParams(params: SliderParams) {
    this.params = params;
  }

  public getParams() {
    return this.params;
  }

  public unsubscribe() {
    this.presenter.unsubscribe();
  }

  private init(params: SliderParams) {
    this.presenter.init(params);
    this.presenter.model.subscribe(
      SubscribersNames.updateThumbView,
      this.handleThumbChange.bind(this),
    );
  }

  private handleThumbChange() {
    const params = this.presenter.model.getParams();
    if (this.params.onChange) {
      this.params.onChange(params);
    }
  }
}

export default Slider;
