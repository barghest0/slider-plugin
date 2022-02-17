type SubscriberFn = (...data: any[]) => void;

type Subscribers = {
  [key: string]: SubscriberFn[];
};

export { SubscriberFn, Subscribers };
