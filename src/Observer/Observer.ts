import { SubscriberFn, Subscribers } from './types/observer';

class Observer {
  public subscribers: Subscribers;

  constructor(subscribers: Subscribers = {}) {
    this.subscribers = subscribers;
  }

  public subscribe(name: string, fn: SubscriberFn) {
    this.subscribers[name] = this.subscribers[name] || [];
    this.subscribers[name].push(fn);
  }

  public unsubscribe(name: string, fn: SubscriberFn) {
    this.subscribers[name] = this.subscribers[name].filter(
      (subscriberFunc: SubscriberFn) => fn !== subscriberFunc,
    );
  }

  public notify(name: string, ...args: any[]) {
    this.subscribers[name].forEach((subscriberFunc: SubscriberFn) => {
      subscriberFunc(...args);
    });
  }
}
export default Observer;
