
export function onFormat(bal){
  
  if (bal >= 1e12) {
    return (bal / 1e12).toFixed(2) + "T"}
    
    
  if (bal >= 1e9) {
    return (bal / 1e9).toFixed(2) + "B"}
    
    
  if (bal >= 1e6) {
    return (bal / 1e6).toFixed(2) + "M"}
    
    
  if (bal >= 1000) {
    return (bal / 1000).toFixed(2) + "K"
  }
  
  if (bal >= 0) {
    return (bal / 1).toFixed(4);
  }

  
return (bal || 0)?.toLocaleString("en-US",{
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}