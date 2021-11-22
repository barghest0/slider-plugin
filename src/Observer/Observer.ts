class Observer{
    private subscribers: any
    constructor(subscribers:any) {
		this.subscribers = {};
    }
    
    public subscribe(name:any,event:any){
        const eventInObject = this.subscribers[event]
        if (eventInObject) {
            event.push(event)
          } else {
            this.subscribers[name] = [event]
          }
    }

    public unsubscribe(name:any,event:any) {
        this.subscribers[name].filter((subscriberFunc:any)=> event != subscriberFunc)
    }

    public notify(name:any, data?:any){
        this.subscribers[name].forEach((subscriberFunc:any) => {
            subscriberFunc(data)
        });
    }
}