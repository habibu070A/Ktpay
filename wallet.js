import { useStore } from "./useStore.js";


const totalNG = document.getElementById("ngn");
const usdt = document.getElementById("usdt");

useStore.subscribe(e => {
  totalNG.innerHTML = `<span style="font-size: 10px">&#8358;</span> ${e.ngn.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
  
  usdt.innerHTML = `$ ${e.total.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  })}`;
});

function deposit() {
  useStore.getState().deposit(1000)
}


function transfer() {
  useStore.getState().transfer(200)
}