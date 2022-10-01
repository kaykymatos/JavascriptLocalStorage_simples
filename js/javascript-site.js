function getCache() {
  localStorage.name = document.getElementById("nome").value;
  localStorage.email = document.getElementById("email").value;
  localStorage.data = document.getElementById("data").value;
  localStorage.telefone = document.getElementById("telefone").value;
}
function loadCache() {
  document.getElementById("nome").value = localStorage.name
    ? localStorage.name
    : "";
  document.getElementById("email").value = localStorage.email
    ? localStorage.email
    : "";
  document.getElementById("data").value = localStorage.data
    ? localStorage.data
    : "";
  document.getElementById("telefone").value = localStorage.telefone
    ? localStorage.telefone
    : "";
}
