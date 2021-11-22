type SubscribeEvent = (data?:any) => void

interface ISubscribers {
    [key: string]: SubscribeEvent[]
}
  









export {SubscribeEvent,ISubscribers}