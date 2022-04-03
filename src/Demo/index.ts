import '../Style/style.scss';
import '../slider-plugin';


const slider = $('.js-slider-1').slider({
  panel: true,
  onChange: params => console.log(params),
});

$('.js-slider-2').slider({
  min: -6,
  max: 6,
  step: 1.5,
  value: [-3, 3],
  isRange: true,
  direction: 'horizontal',
  hasFill: true,
  hasTips: true,
  hasScale: true,
  isDecimal: true,
  decimalPlaces: 1,
  panel: true,
});

$('.js-slider-3').slider({
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
  decimalPlaces: 0,
  panel: true,
});

$('.js-slider-4').slider({
  min: -100,
  max: 100,
  step: 10,
  value: 0,
  isRange: false,
  direction: 'vertical',
  hasFill: true,
  hasTips: true,
  hasScale: true,
  isDecimal: false,
  decimalPlaces: 0,
  panel: true,
});
$('.js-slider-5').slider();
