function showAlert(message) {
  let alerts = document.getElementById("showAlert");
  let id = document.querySelector(".showAlert");
  
  
  alerts.innerHTML = message ? message : undefined;
  
  id.classList.add("alertActive");
  
  setTimeout(() => {
    id.classList.remove("alertActive");
  }, 4000)
}