import { useStore } from "./useStore.js";


const deposit = useStore.getState();
const bal = document.getElementById("balance");


document.getElementById("deposit").addEventListener("click", () => {
  
  
  const res = useStore.getState().deposit(1000000);
  if (res?.error) {
    alert(res?.error)
  }
});




function renderApp(state) {
  
  bal.innerHTML = state.total.toLocaleString("en-Us", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

renderApp(useStore.getState());
useStore.subscribe(renderApp);