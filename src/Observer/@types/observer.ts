type SubscriberEvent = (...data: any[]) => void;

type Subscribers = {
  [key: string]: SubscriberEvent[];
};

export { SubscriberEvent, Subscribers };
