import { SliderParams, SubscribersNames, UserSliderParams } from './types/slider';
import Presenter from './Presenter/Presenter';
import Panel from './Demo/Panel/Panel';
import Observer from './Observer/Observer';
import { DEFAULT_SLIDER_PARAMS, FIRST_THUMB_STANCE } from './constants/slider';

class Slider extends Observer {
  public presenter: Presenter;

  public root: string;

  public DOMroot: HTMLElement;

  public panel: Panel | null;

  private params: SliderParams;

  constructor(root: string, params?: UserSliderParams) {
    super();
    this.root = root;
    this.panel = null;
    this.DOMroot = <HTMLElement>document.querySelector(root);
    this.params = DEFAULT_SLIDER_PARAMS;
    this.presenter = new Presenter(this.root, params || this.params, this);

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

  public addControlPanel() {
    this.panel = new Panel(this.root, this);
    this.panel.subscribe(
      SubscribersNames.updateParams,
      this.updateParamsFromPanel.bind(this),
    );
    this.panel.subscribe(
      SubscribersNames.updateParams,
      this.panel.initializePanelsParams.bind(this.panel),
    );

    this.panel.init();
  }

  private init(params: UserSliderParams) {
    this.presenter.model.subscribe(
      SubscribersNames.updateThumbView,
      this.handleThumbChange.bind(this),
    );
    this.presenter.init(params);
  }

  private handleThumbChange(stance: number) {
    const value = this.presenter.model.getValue()[stance];
    const params = this.presenter.model.getParams();
    if (this.params.onChange) {
      this.params.onChange(params);
    }
    if (this.panel) {
      if (stance === FIRST_THUMB_STANCE) {
        this.panel.firstValueInput.value = String(value);
      } else {
        this.panel.secondValueInput.value = String(value);
      }
    }
  }

  private updateParamsFromPanel(params: UserSliderParams) {
    this.unsubscribe();
    this.init(params);
  }
}

export default Slider;
