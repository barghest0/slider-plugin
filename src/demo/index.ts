import Panel from '../components/Panel/Panel';
import '../assets/style/style.scss';

window.addEventListener('load', () => {
  const slider1 = $('.js-slider-1').slider();
  const panel1 = new Panel(slider1);

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
  const panel2 = new Panel(slider2);

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
  const panel3 = new Panel(slider3);

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
  const panel4 = new Panel(slider4);

  const slider5 = $('.js-slider-5').slider();
  const panel5 = new Panel(slider5);

});
