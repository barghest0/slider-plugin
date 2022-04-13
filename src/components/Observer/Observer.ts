import { SubscriberFn, Subscribers } from './types';
import { SliderParams } from '../Slider/types';
import { DEFAULT_SLIDER_PARAMS } from '../Slider/constants';

class Observer {
  private subscribers: Subscribers;

  constructor(subscribers: Subscribers = {}) {
    this.subscribers = subscribers;
  }

  subscribe(name: string, fn: SubscriberFn) {
    this.subscribers[name] = this.subscribers[name] || [];
    this.subscribers[name].push(fn);
  }

  unsubscribe(name: string, fn: SubscriberFn) {
    this.subscribers[name] = this.subscribers[name].filter(
      (subscriberFunction: SubscriberFn) => fn !== subscriberFunction,
    );
  }

  notify(name: string, params: SliderParams = DEFAULT_SLIDER_PARAMS) {
    this.subscribers[name].forEach((subscriberFunction: SubscriberFn) => {
      subscriberFunction(params);
    });
  }

  getSubscribers() {
    return this.subscribers;
  }
}
export default Observer;
