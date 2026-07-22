import { defaultCoins } from "./coins.js";

import { useStore } from "./useStore.js";


let id = defaultCoins.map(k => k.idGecko).join(",");
const url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_24hr_change=true`;


async function onSync() {
 
 try {
   const res = await fetch(url);
   let data = await res.json();
   useStore.getState().updatePrice(data);
 } catch (err) {
   console.log(err)
 }
}



onSync();

setInterval(onSync, 60000);