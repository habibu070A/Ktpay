import { defaultCoins } from "./coins.js";

import { useStore } from "./useStore.js";


let id = defaultCoins.map(k => k.idGecko).join(",");
const url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd,ngn&include_24hr_change=true`;


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

setInterval(onSync, 20000);



const ws = WebSocket("wss://stream.bybit.com/v5/public/spot");

function on() {
 alert("yes);
ws.onopen = () => {
  ws.send(JSON.stringify({
    op: "subscribe",
    args:[
      "tickers.BNBUSDT",
      "tickers.USDTUSD",
      "tickers.POLUSDT",
      "tickers.BTCUSDT",
      "tickers.ETHUSDT"
    ]
  }))
};


let getLive = useStore.getState().onGetPrice;

ws.onmessage = (e) => {
  let data = JSON.parse(e.data);
  Object.values(data).map(d => {
   getLive(d);
  })
};
}
on();
setinterval(on, 10000);
