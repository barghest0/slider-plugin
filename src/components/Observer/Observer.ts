import { SubscriberFn, Subscribers } from './types';

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
      (subscriberFunc: SubscriberFn) => fn !== subscriberFunc,
    );
  }

  notify(name: string, ...args: any[]) {
    this.subscribers[name].forEach((subscriberFunc: SubscriberFn) => {
      subscriberFunc(...args);
    });
  }

  getSubscribers() {
    return this.subscribers;
  }
}
export default Observer;
