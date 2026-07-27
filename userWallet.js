

class wallet {
  constructor() {
    this.wallet = new Map();
  }
  
  
  get(key) {
    return this.wallet.get(key);
  }
  
  
  
  async set(key, value) {
    this.wallet.set(key, value);
    let d = this.wallet.get[key];
    localStorage.setItem("wallet", JSON.stringify(d));
    console.log(d);
    return true;
  }
}




const db = new wallet();

async function createWallet() {
  const w = ethers.Wallet.createRandom();
  
  let d = w.address;
  let p = w.mnemonic.phrase;
  
  db.set("wallet", {address: d, private_key: p});
  
  
  
  console.log(db.get("wallet"));
}