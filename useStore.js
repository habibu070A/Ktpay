import { createStore } from "./appState.js";

export const useStore = createStore((set, get) => ({
  total: 2000,
  fee: 0,
  user: [],
  coins: [],
  
  
  uplaodCoin: (data) => {
  if (typeof data === "object") {
    let coins = get().coins;
    set({coins: data})
  } else {
    return {error: "only objecj"}
  }
  },
  
  
  
  
  getCoin: () => {
    return get().coins;
  },
  
  
  
  
  
  
updatePrice: (data) => {
  let coins = get().coins;
  let vl = Object.values(coins);
  let newCoin = coins.map(k => {
  let p = data[k.idGecko]?.usd;
  let c = data[k.idGecko].usd_24h_change;
  if (!p) return k;
  return {...k, price: p, change: c}
  });
  set({coins: newCoin});
  console.log("yes", get().coins)
},
  
  
  
  
  
  
  
  
  
  
  deposit: (data) => {
    let fe = 0.99;
    let res = data * fe;
    if (typeof data !== "number") {
      return {error: "invalid Amount"}
    }
    if (data <= 0) {
      return {error: "error negative amount"}
    }
    
    set({fee: get().fee + fe})
    set({total: get().total + res})
    return {success: "success"}
  },
  
  
  
  
  transfer: (amt) => {
    if (typeof amt !== "number") {
      return {error: "Invalid Amount"}
    }
    if (amt <= 0) {
      return {error: "please Enter amount"}
    }
    
    if (get().total < amt) {
      return {error: "insufficient balance"}
    } else {
      set({total: get().total - amt})
    }
    return {success: "success"}
  }
}));