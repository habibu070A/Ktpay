import { useStore } from "./useStore.js"



  
export let defaultCoins = [
     {
       id: 1,
       balance: 0.5,
       value_ngn: 0,
       price: 0,
       price_ngn: 0,
       change: 0,
       chainId: null,
       name: "Bnb Chain",
       symbol: "BNB",
       syl: "BNBUSDT",
       idGecko: "binancecoin",
       network: "BEP20",
       logo: "bnb.png",
       coin_logo: "bnb.png",
       rpc: null,
       contract: null
     },
     {
       id: 2,
       logo: "usdt.png",
       balance: 0.3,
       value_ngn: 0,
       price_ngn: 0,
       price: 0,
       change: 0,
       name: "Tether USD",
       symbol: "USDT",
       syl: "USDTUSD",
       idGecko: "tether",
       network: "BEP20",
       chainId: 56,
       coin_logo: "bnb.png",
       rpc: "https://bsc-datasees.binance.org",
       contract: "0x55d398326f99059fF775485246999027B3197955"
     },
     {
       id: 3,
       balance: 0.5,
       value_ngn: 0,
       price_ngn: 0,
       price: 0,
       change: 0,
       name: "Tether USD",
       symbol: "USDT",
       syl: "USDTUSD",
       idGecko: "tether",
       network: "Base",
       chainId: 8453,
       logo: "usdt.png",
       coin_logo: "base.png",
       rpc: "https://mainnet.base.org",
       contract: null
     },
     {
       id: 4,
       balance: 2,
       value_ngn: 0,
       price_ngn: 0,
       price: 0,
       change: 0,
       name: "Tether USD",
       symbol: "USDT",
       syl: "USDTUSD",
       idGecko: "tether",
       network: "Polygon",
       chainId: 137,
       logo: "usdt.png",
       coin_logo: "poly.png",
       rpc: "https://polygon-rpc.com",
       contract: null
     },
     {
       id: 5,
       balance: 2,
       change: 0,
       price: 0,
       price_ngn: 0,
       value_ngn: 0,
       idGecko: "bitcoin",
       name: "Bitcoin BTC",
       symbol: "BTC",
       syl: "BTCUSDT",
       network: "BEP20",
       logo: "btc.png",
       coin_logo: "bnb.png"
     },
     {
       id: 6,
       balance: 1000,
       price: 0,
       change: 0,
       value_ngn: 0,
       price_ngn: 0,
       idGecko: "matic-network",
       name: "Poly POL",
       symbol: "POL",
       network: "Polygon",
       syl: "POLUSDT",
       logo: "poly.png",
       coin_logo: "poly.png"
     },
     {
       id: 7,
       balance: 3,
       price: 0,
       change: 0,
       value_ngn: 0,
       price_ngn: 0,
       idGecko: "ethereum",
       name: "Ether ETH",
       symbol: "ETH",
       network: "Base",
       syl: "ETHUSDT",
       logo: "eth.png",
       coin_logo: "base.png"
     }
  ]
  

  


function call() {
  useStore.getState().uplaodCoin(defaultCoins);
}

call();
