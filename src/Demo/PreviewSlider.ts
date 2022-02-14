import { InitMods, SliderParams, UserSliderParams } from '../utils/interfaces';
import Slider from '../Slider';
import Panel from './Panel/Panel';
import checkParams from '../Presenter/PresenterModules/validateParams/validateParams';

class PreviewSlider {
  public panel: Panel;

  public slider: Slider;

  public params: SliderParams;

  public root: string;

  public DOMroot: HTMLElement;

  constructor(root: string, params: UserSliderParams) {
    this.root = root;
    this.DOMroot = <HTMLElement>document.querySelector(root);
    this.params = checkParams(params, this.DOMroot);
    this.slider = new Slider(root, this.params);
    this.panel = new Panel(this.params, root, this);

    this.init(this.params, InitMods.init);
    this.panel.addInputListeners();
  }

  public init(params: SliderParams, mode: string) {
    if (mode === InitMods.rebuild) {
      this.params = params;
      this.slider.init(params, mode);
    }

    this.panel.initializeInputs(this.root);
    this.panel.initializeFormValues(params);
  }
}
export default PreviewSlider;
