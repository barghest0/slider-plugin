enum APINames {
  getParams = 'getParams',
  getContainer = 'getContainer',
  getParent = 'getParent',
  getSliderInstance = 'getSliderInstance',
  updateParams = 'updateParams',
  subscribe = 'subscribe',
  unsubscribe = 'unsubscribe',
}

type SubscribeCallback = () => void;

export { APINames, SubscribeCallback };
