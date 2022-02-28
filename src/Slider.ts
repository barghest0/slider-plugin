import { SliderParams, SubscribersNames, UserSliderParams } from './types/slider';
import Presenter from './Presenter/Presenter';
import Observer from './Observer/Observer';
import { DEFAULT_SLIDER_PARAMS } from './constants/slider';

class Slider extends Observer {
  public presenter: Presenter;

  public DOMroot: HTMLElement;

  public DOMparent: HTMLElement;

  private params: SliderParams;

  constructor(DOMroot: HTMLElement, params?: UserSliderParams) {
    super();
    this.params = DEFAULT_SLIDER_PARAMS;
    this.DOMroot = DOMroot;
    this.DOMparent = <HTMLElement>DOMroot.parentElement;
    this.presenter = new Presenter(params || this.params, this);
    this.init(params || this.params);
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

  private init(params: UserSliderParams) {
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
