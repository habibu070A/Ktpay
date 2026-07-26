import { useStore } from "./useStore.js";


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





function onSort() {
  let coin = useStore.getState().getCoin();
  
  const sort = coin.sort((a, b) => b.change - a.change);
  useStore.getState().sortPrice([...sort]);
}

onSort();
setInterval(onSort, 100);









function renderApp(state) {
  
  bal.innerHTML = (state?.total || 0)?.toLocaleString("en-Us", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  if (state?.total <= 0) {
    setTimeout(() => {renderApp()}, 100);
    console.log(state.total);
  }
}

renderApp(useStore.getState());
useStore.subscribe(renderApp);
