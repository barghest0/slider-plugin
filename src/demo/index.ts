import Panel from '../components/Panel/Panel';
import '../style/style.scss';

window.addEventListener('load', () => {
  const slider1 = $('.js-slider-1').slider();

  new Panel(slider1);

  const slider2 = $('.js-slider-2').slider({
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
  });

  new Panel(slider2);

  const slider3 = $('.js-slider-3').slider({
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
  });

  new Panel(slider3);

  const slider4 = $('.js-slider-4').slider({
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
  });

  new Panel(slider4);

  $('.js-slider-5').slider();
});
