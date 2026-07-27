import { useStore } from "./useStore.js";


const totalNG = document.getElementById("ngn");
const usdt = document.getElementById("usdt");

useStore.subscribe(e => {
  totalNG.innerHTML = `<span style="font-size: 10px">&#8358;</span> ${e.ngn > 0 ? e?.ngn.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) : (e?.ngn || 0).toFixed(8)} `;
  
  usdt.innerHTML = `$ ${e?.ngn > 0 ? e?.total.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }) : (e?.ngn || 0).toFixed(6)}`;
});

function deposit() {
  useStore.getState().deposit(1000)
}


function transfer() {
  useStore.getState().transfer(200)
}