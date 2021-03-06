import View from 'components/View/View';
import Track from 'components/View/SubViews/Track/Track';
import { Directions, Params } from 'components/Slider/types';
import { ViewSubscribersNames } from 'components/Observer/types';

describe('Track test', () => {
  document.body.innerHTML = '<div id="slider-1" class="slider-1"></div>';
  const rootClass = '.slider-1';
  const DOMroot = <HTMLElement>document.querySelector(rootClass);
  const view = new View(DOMroot);
  const track = new Track(view);

  const subscriberMockFunction = jest.fn();
  beforeAll(() => {
    track.renderTrack(Directions.horizontal);
    track.clickTrack();
    track.subscribe(
      ViewSubscribersNames.updateThumbAfterTrackClick,
      subscriberMockFunction,
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('is DOM track instance of HTMLElement test', () => {
    expect(track.track).toBeInstanceOf(HTMLElement);
  });

  test('expect notify model after click track in horizontal/vertical direction', () => {
    jest.spyOn(track, 'notify');
    view.setParam(Params.direction, Directions.horizontal);
    track.track.dispatchEvent(new MouseEvent('pointerdown'));

    expect(track.notify).toBeCalled();

    view.setParam(Params.direction, Directions.vertical);
    track.track.dispatchEvent(new MouseEvent('pointerdown'));

    expect(track.notify).toBeCalled();
  });
});
