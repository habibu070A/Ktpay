import { useStore } from "./useStore.js";
import { onFormat } from "././formatBalance.js"


const ngn = document.getElementById("ngn");
const usdt = document.getElementById("usdt");


useStore.subscribe((e) => {
  let coin = e.coins;
  let t = 0;
  let tn = 0;
  
  
  coin.map((b) => {
  t += b.balance * b.price;
  tn += b.balance * (b?.price_ngn || 0);
  usdt.innerHTML = `$ ${onFormat(t)}`;
  ngn.innerHTML = `<span style="font-size: 10px">&#8358;</span> ${onFormat(tn)}`;
  });
})














function deposit() {
  useStore.getState().deposit(1000)
}


function transfer() {
  useStore.getState().transfer(200)
}