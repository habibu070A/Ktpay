import { useStore } from "./useStore.js";

function useThis() {
let d = useStore.getState().getCoin();
let list = document.getElementById("coins");
let asst = document.getElementById("coin-asset");
let html = "";
let asset = "";


d.map(k => {
    let col = k.change < 0 ? "red" : "#00c087";
    const balance = k.balance?.toLocaleString("en-UD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    
    const price = k.price?.toLocaleString("en-US", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4
    });
    
    const val = k.value_ngn?.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    const p_ngn = k.price_ngn?.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
    
    
    asset += `
    <article onclick="onTrade('')" class="row-asset">
    
    <div class="div-left">
    <img src="${k.logo}" alt="img"
    class="asset-logo"/>
    
    <img src="${k.coin_logo}" alt="img" class="coin-logo"/>
    
    <div class="coin-name">
    <span>${k.name}</span>
    <span style="font-size: 10px">${k.symbol}-${k.network}</span>
    </div>
    
    </div>
    
    <div class="right-up">
    <span style="font-size: 10px">${k.symbol}</span>
    <span>${balance}</span>
    </div>
    
    <span class="left-dow">&#8358; ${p_ngn}</span>
    
    <span class="right-dow">&#8358; ${val}</span>
  
    </article>
    `;
    
    
    html += `
    <div class="coin-row" onclick="onTrade('')">
    <article>
    <img src="${k.logo}" alt="img" class="coin-symbol"/>
    <img src="${k.coin_logo}" alt="img" class="coin-logo"/>
    
    <div>
    <span>${k.name}</span>
    <p>${k.symbol}-${k?.network}</p>
    </div>
    </article>
    
    <span class="bal-item" style="font-size: 10px">${k.symbol} <span class="bal-item">${balance}</span></span>
    
    <span class="chan-item" style="color:${col}; border-radius: 10px; box-shadow: 0px 0px 1px #000;">${k.change.toFixed(4)} %</span>
    
    <span class="price-item" style="color: ${col}">$ ${price}</span>
    </div>
    `;
  })

list.innerHTML = html;
asst.innerHTML = asset;
}


useThis();

useStore.subscribe(() => {
  useThis();
})