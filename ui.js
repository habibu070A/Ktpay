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
  console.log(sorted)
}

setTimeout(() => {
  onUnshift();
}, 100)




function renderApp(state) {
  
  bal.innerHTML = state.total.toLocaleString("en-Us", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

renderApp(useStore.getState());
useStore.subscribe(renderApp);
