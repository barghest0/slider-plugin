import { SubscriberEvent, Subscribers } from './@types/observer';

class Observer {
  private subscribers: Subscribers;

  constructor(subscribers: Subscribers = {}) {
    this.subscribers = subscribers;
  }

  public subscribe(name: string, event: SubscriberEvent) {
    const eventInObject = this.subscribers[name];

    if (eventInObject) {
      eventInObject.push(event);
    } else {
      this.subscribers[name] = [event];
    }
  }

  public unsubscribe(name: string, event: SubscriberEvent) {
    this.subscribers[name].filter(
      (subscriberFunc: SubscriberEvent) => event !== subscriberFunc,
    );
  }

  public notify(name: string, ...args: any[]) {
    this.subscribers[name].forEach((subscriberFunc: SubscriberEvent) => {
      subscriberFunc(...args);
    });
  }
}
export default Observer;
