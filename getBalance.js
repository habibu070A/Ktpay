import { useStore } from "./useStore.js";




function getWallet() {
  let wallet = ethers.Wallet.createRandom();
  console.log(wallet.address, wallet.privateKey, "mn" + wallet.mnemonic.phrase);
}




async function getBalance(){
  let provider = new ethers.JsonRpcProvider(mnnt);
  
  let contract = new ethers.Contract(CON, ABI, provider);
  
  
  let bal = await contract.balanceOf(add);
  
  return ethers.formatUnits(bal, 18)
}