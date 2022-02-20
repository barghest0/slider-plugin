import {
  convertTypeAcquisitionFromJson,
  textChangeRangeIsUnchanged,
} from 'typescript';
import {
  SliderParams,
  SubscribersNames,
  UserSliderParams,
} from './types/slider';
import Presenter from './Presenter/Presenter';
import validateParams from './Presenter/PresenterModules/validateParams';
import Panel from './Demo/Panel/Panel';
import Observer from './Observer/Observer';
import { FIRST_THUMB_STANCE } from './constants/slider';

class Slider extends Observer {
  public presenter: Presenter;

  public root: string;

  public DOMroot: HTMLElement;

  public panel: Panel;

  private params: SliderParams;

  constructor(root: string, params: UserSliderParams) {
    super();
    this.root = root;
    this.panel = new Panel(this.root, this);
    this.DOMroot = <HTMLElement>document.querySelector(root);
    this.params = validateParams(params, this.DOMroot);
    this.presenter = new Presenter(root, this.getParams());

    this.init();
  }

  public init() {
    this.presenter.init(validateParams(this.getParams(), this.DOMroot));
    this.presenter.model.subscribe(
      SubscribersNames.updateThumbView,
      this.handleThumbChange.bind(this),
    );
  }

  public setParams(params: SliderParams) {
    this.params = params;
  }

  public getParams() {
    return this.params;
  }

  public addControlPanel() {
    this.panel.init();
    this.panel.subscribe(
      SubscribersNames.updateParams,
      this.updateParamsFromPanel.bind(this),
    );
    this.panel.subscribe(
      SubscribersNames.updateParams,
      this.panel.initializePanelsParams.bind(this.panel),
    );
  }

  public unsubscribe() {
    this.presenter.unsubscribe();
  }

  private handleThumbChange(stance: number) {
    const value = this.presenter.model.getValue()[stance];

    this.params.value[stance] = value;
    if (this.params.onChange) {
      this.params.onChange(this.params);
    }
    if (this.panel) {
      if (stance === FIRST_THUMB_STANCE) {
        this.panel.firstValueInput.value = String(value);
      } else {
        this.panel.secondValueInput.value = String(value);
      }
    }
  }

  private updateParamsFromPanel(params: SliderParams) {
    this.params = params;
    this.unsubscribe();
    this.init();
  }
}

export default Slider;
