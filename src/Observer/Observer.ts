import { SubscribeEvent, ISubscribers } from "../Interfaces/interfaces";

class Observer {
    private subscribers: ISubscribers;
    constructor(subscribers: ISubscribers = {}) {
        this.subscribers = subscribers;
    }

    public subscribe(name: string, event: SubscribeEvent) {
        const eventInObject = this.subscribers[name];
        if (eventInObject) {
            eventInObject.push(event);
        } else {
            this.subscribers[name] = [event];
        }
    }

    public unsubscribe(name: string, event: SubscribeEvent) {
        this.subscribers[name].filter((subscriberFunc: SubscribeEvent) => event != subscriberFunc);
    }

    public notify(name: string, ...args: any) {
        this.subscribers[name].forEach((subscriberFunc: SubscribeEvent) => {
            subscriberFunc(...args);
        });
    }
}
export default Observer;
