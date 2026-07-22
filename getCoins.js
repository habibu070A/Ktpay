import { useStore } from "./useStore.js";

function useThis() {
let d = useStore.getState().getCoin();
let list = document.getElementById("coins");
let html = "";
d.map(k => {
    let col = k.change < 0 ? "red" : "#00c087";
    const balance = k.balance.toLocaleString("en-UD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    
    html += `
    <div class="coin-row" onclick="onTrade()">
    <article>
    <img src="${k.logo}" alt="img" class="coin-symbol"/>
    <img src="${k.coin_logo}" alt="img" class="coin-logo"/>
    
    <div>
    <span>${k.name}</span>
    <p>${k.symbol}-${k?.network}</p>
    </div>
    </article>
    
    <span class="bal-item">$ ${balance}</span>
    
    <span class="chan-item" style="color:${col}; border-radius: 10px; box-shadow: 0px 0px 1px #000;">${k.change.toFixed(4)} %</span>
    
    <span class="price-item" style="color: ${col}">$ ${k.price}</span>
    </div>
    `;
  })

list.innerHTML = html;
}


useThis();

useStore.subscribe(() => {
  useThis();
})
