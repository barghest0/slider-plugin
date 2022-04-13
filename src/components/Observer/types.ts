import { SliderParams } from "../Slider/types";

type SubscriberFn = (params:SliderParams) => void;

type Subscribers = Record<string,SubscriberFn[]> 


export { SubscriberFn, Subscribers};
