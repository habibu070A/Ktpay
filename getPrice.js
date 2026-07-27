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





let getLive = useStore.getState().onGetPrice
let ws = null;
let count = 0;
let ping = null;


function onConnect() {
ws = new WebSocket("wss://stream.bybit.com/v5/public/spot");

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


ping = setInterval(() => {
  
  if (ws.readyState === 1) {
    ws.send(JSON.stringify({op: "ping"}))
  }
}, 20000);



ws.onmessage = function(e){
  let data = JSON.parse(e.data);
  Object.values(data).map(d => {
   getLive(d);
  })
};

ws.onerror = function(err) {
  showAlert("error", err);
  clearInterval(ping);
}


ws.onclose = function(err) {
  showAlert("poor network connection🛜" + err);
  
  clearInterval(ping);
  
  count++;
  let timing = count * 1000;
  if (timing > 10000) timing = 10000;
  
  setTimeout(() => {
    onConnect();
  }, timing);
}

}


onConnect();