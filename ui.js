import { useStore } from "./useStore.js";
import { onFormat } from "./formatBalance.js";


const deposit = useStore.getState();
const bal = document.getElementById("balance");


document.getElementById("deposit").addEventListener("click", () => {
  showAlert("Deposit coming soon stay tuned for update")
});







function onUnshift() {
  let obj = useStore.getState().coins;
  
  if (!obj) return;
  
  let balUp = obj.filter(c => c.balance > 0);
  
  let balDow = obj.filter(e => e.balance <= 0 || !e.balance);
  
  balUp.sort((a, b) => b.balance - a.balance);
  
  
  
  let sorted = [...balUp, ...balDow];
  
  
  useStore.getState().unshift(sorted);
}

setTimeout(() => {
  onUnshift();
}, 100);






function render(c) {
  let coin = useStore.getState().getCoin();
  const sort = coin.sort((a, b) => b.change - a.change);
  
  useStore.getState().sortPrice([...sort]);
};

render();
setInterval(render, 100);






useStore.subscribe((e) => {
  let coin = e.coins;
  let t = 0;
  coin.map(e => {
  t += e.balance * e.price;
  })
  bal.innerHTML = onFormat(t);
});