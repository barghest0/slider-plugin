import View from '../../../src/components/View/View';
import Track from '../../../src/components/View/SubViews/Track/Track';
import { Directions, Params } from '../../../src/components/Slider/types';
import { ViewSubscribersNames } from '../../../src/components/Observer/types';

describe('Track test', () => {
  document.body.innerHTML =
    '<div id="slider-1" data-testid="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const root = <HTMLElement>document.querySelector(rootClass);
  const view = new View(root);
  const track = new Track(view);
  track.renderTrack(Directions.horizontal);
  track.clickTrack();

  test('is DOM track instance of HTMLElement test', () => {
    expect(track.track).toBeInstanceOf(HTMLElement);
  });

  test('expect notify model after click track in horizontal/vertical direction', () => {
    const subscriberFn = jest.fn();
    jest.spyOn(track, 'notify');
    track.subscribe(ViewSubscribersNames.updateThumbAfterTrackClick, subscriberFn);

    view.setParam(Params.direction, Directions.horizontal);
    root.dispatchEvent(new MouseEvent('pointerdown'));

    expect(track.notify).toBeCalled();

    view.setParam(Params.direction, Directions.vertical);
    root.dispatchEvent(new MouseEvent('pointerdown'));

    expect(track.notify).toBeCalled();
  });
});
