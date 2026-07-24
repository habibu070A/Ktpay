import { createStore } from "./appState.js";

export const useStore = createStore((set, get) => ({
  total: 0,
  ngn: 0,
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
  
  
  unshift: (data) => {
    set({coins: data});
  },
  
  
  
  
  
  
updatePrice: (data) => {
  let coins = get().coins;
  let usdt = 0;
  let ngn = 0;
  
  let newCoin = coins.map(k => {
  let p = data[k.idGecko];
  
  if (!p) return k;
  let val_ngn = k.balance * p.ngn
  let p_ngn = p?.ngn;
  let c = p.usd_24h_change;
  usdt += k.balance * p.usd;
  ngn += k.balance * p.ngn;

  return {...k, price: p.usd, change: c, price_ngn: p_ngn, value_ngn: val_ngn}
  });
  set({coins: newCoin, total: usdt ? usdt : 0, ngn: ngn ? ngn : 0});
},




deposit: (a, b, amt) => {
 let coins = get().coins;
 
 if (!a || !b || !amt) {
   return {error: "required failed"}
 }
 
 if (typeof amt !== "number") {
   return {error: "only number"}
 }
 
 if (amt <= 0) {
   return {error: "invalid amt"}
 }
 
 let news = coins.map(e => {
 if (e.network === a && e.symbol === b) {
   return {...e, balance: amt}
 }
 return e;
 });
 set({coins: news});
 return {success: "success"}
},






transfer: (a, b, amt) => {
 let coins = get().coins;
 let match = coins.find(e => e.network === a && e.symbol === b);
 
 if (!a || !b || !amt) {
   return {error: "cannot send empty data"}
 }
 
 if (typeof amt !== "number") {
   return {error: "only number"}
 }
 
 
 if (!match) {
   return {error: "required failed"}
 }
 
 
 if (amt <= 0) {
   return {error: "invalid amount"}
 }
 
 if (match.balance < amt) {
   return {error: "insufficient balance"}
 }
 
 let newCoin = coins.map(e => {
   if (e.network === a && e.symbol === b) {
   let remaning = e.balance - amt;
   return {...e, balance: remaning}
   }
   return e;
 });
 set({coins: newCoin});
 return {success: "succsess"}
},




onBuy: (a, b, amt) => {
if (amt <= 0) {
  return {error: "invalid amt"}
}

let coins = get().coins;

let net = coins.find(e => e.network === a && e.symbol === b);

if (!net) {
  return {error: "network false"}
}

if (net.balance < amt) {
  return {error: "insufficient"}
 }
 
let newc = coins.map(e => {
if (e.network === a && e.symbol === b) {
let from = e.balance - amt;
return {...e, balance: from}
}
return e;
})
set({coins: newc})
}

}));