function inserir(valor) {
  var num = document.getElementById("nmrvoto").value;

  document.getElementById("nmrvoto").value = num + valor;
}

function corrigir() {
  document.getElementById("nmrvoto").value = "";
  document.getElementById("nomevoto").value = "";
}
