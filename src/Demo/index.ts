import Slider from '../Slider';
import '../Style/style.scss';

const previewSlider1 = new Slider('.slider-1', {
  onChange: params => console.log(params.value),
});

previewSlider1.addControlPanel();

const previewSlider2 = new Slider('.slider-2', {
  min: -6,
  max: 6,
  step: 3,
  value: [-3, 3],
  isRange: true,
  direction: 'horizontal',
  hasFill: true,
  hasTips: true,
  hasScale: true,
  isDecimal: true,
  decimalPlaces: 1,
});

previewSlider2.addControlPanel();

const previewSlider3 = new Slider('.slider-3', {
  min: -15000,
  max: 15000,
  step: 500,
  value: [-3000, 3000],
  isRange: true,
  direction: 'horizontal',
  hasFill: true,
  hasTips: true,
  hasScale: true,
  isDecimal: false,
  decimalPlaces: 1,
});

previewSlider3.addControlPanel();

const previewSlider4 = new Slider('.slider-4', {
  min: -100,
  max: 100,
  step: 10,
  value: -50,
  isRange: false,
  direction: 'vertical',
  hasFill: true,
  hasTips: true,
  hasScale: true,
  isDecimal: false,
  decimalPlaces: 1,
});

previewSlider4.addControlPanel();
