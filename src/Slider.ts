import { InitMods, SliderParams, UserSliderParams } from './types/slider';
import Presenter from './Presenter/Presenter';
import validateParams from './Presenter/PresenterModules/validateParams';
import Panel from './Demo/Panel/Panel';

class Slider {
  public presenter: Presenter;

  public root: string;

  public DOMroot: HTMLElement;

  public params: SliderParams;

  constructor(root: string, params: UserSliderParams) {
    this.root = root;
    this.DOMroot = <HTMLElement>document.querySelector(root);
    this.params = validateParams(params, this.DOMroot);
    this.presenter = new Presenter(root, this.params);
    this.init(this.params, InitMods.init);
  }

  public init(params: SliderParams, mode: string) {
    this.presenter.init(validateParams(params, this.DOMroot), mode);
  }

  public addControlPanel() {
    const panel = new Panel(this.params, this.root, this);
    panel.init();
  }
}

export default Slider;
