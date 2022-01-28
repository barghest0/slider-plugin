import Tip from '../Tip';

const updateTipsPosition = function (this: Tip, stance: number, offset: number, value: number) {
  $(`${this.view.root} .slider__tip-${stance}`).css({
    [this.view.offsetDirection]: `${offset}%`,
  });

  $(`${this.view.root} .slider__tip-${stance}`).html(
    value.toFixed(
      this.view.thumbView.decimalPlaces,
    ),
  );
};

export default updateTipsPosition;
