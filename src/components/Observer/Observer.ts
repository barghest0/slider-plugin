import {
  ModelObserver,
  SubscriberFn,
  Subscribers,
  ViewObserver,
} from './types';

import { SliderParams } from 'components/Slider/types';
import { DEFAULT_SLIDER_PARAMS } from 'components/Slider/constants';

class Observer<T extends ViewObserver | ModelObserver> {
  private subscribers: Subscribers<T>;

  constructor(subscribers: Subscribers<T> = {} as Subscribers<T>) {
    this.subscribers = subscribers;
  }

  subscribe(name: T, fn: SubscriberFn) {
    this.subscribers[name] = this.subscribers[name] || [];
    this.subscribers[name].push(fn);
  }

  unsubscribe(name: T, fn: SubscriberFn) {
    this.subscribers[name] = this.subscribers[name].filter(
      (subscriberFunction: SubscriberFn) => fn !== subscriberFunction,
    );
  }

  notify(name: T, params: SliderParams = DEFAULT_SLIDER_PARAMS) {
    this.subscribers[name].forEach((subscriberFunction: SubscriberFn) => {
      subscriberFunction(params);
    });
  }

  getSubscribers() {
    return this.subscribers;
  }
}
export default Observer;
