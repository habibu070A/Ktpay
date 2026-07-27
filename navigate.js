function navigate(id) {
  
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  
  document.getElementById(id).classList.add("active");
}








function onTrade() {
  showAlert("trade coming soon stay tuned for update");
  
  window.location.href = "view.html";

}