export function createStore(createStore) {
  let state;
  
  const listeners = new Set();
  
  const setState = (partial) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    
    if (nextState !== state) {
      state = Object.assign({}, state, nextState);
      
      listeners.forEach(listener => listener(state));
    }
  }
  
  const getState = () => state;
  
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listener.delete(listener);
  }
  
  state = createStore(setState, getState);
  
  return {getState, setState, subscribe}
}