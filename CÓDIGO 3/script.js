var branco;

function inserir(valor) {
  var num = document.getElementById("nmrvoto").value;

  if (num <= 0) {
    document.getElementById("nmrvoto").value = valor;
  } else if (num < 10) {
    document.getElementById("nmrvoto").value = num + valor;
  }

  // console.log(num);
}

function corrigir() {
  document.getElementById("nmrvoto").value = "";
  document.getElementById("nomevoto").value = "";
  document.getElementById("fotoCandidato").src = "img/candidatoPadrao.png";
  branco = 0;
}
function votoBranco() {
  document.getElementById("nmrvoto").value = "";
  document.getElementById("nomevoto").value = "Seu voto será em branco";
  branco = 1;
}
function confirma() {
  var nm = document.getElementById("nmrvoto").value;

  if (nm == 13) {
    inserirVoto(1);
  } else if (nm == 22) {
    inserirVoto(2);
  } else if (nm == 27) {
    inserirVoto(3);
  } else if (branco == 1) {
    inserirVoto(4);
  } else if (nm == 0) {
    inserirVoto(5);
  }

  var nmr = document.getElementById("nmrvoto").value;
  // console.log(nmr);
  if (nmr == 13) {
    document.getElementById("nomevoto").value = "Gustavo Gonzaga";
    document.getElementById("fotoCandidato").src = "img/gustavo.jpg";
  } else if (nmr == 22) {
    document.getElementById("nomevoto").value = "Ian Rodrigues";
    document.getElementById("fotoCandidato").src = "img/ian.jpg";
  } else if (nmr == 27) {
    document.getElementById("nomevoto").value = "Heric Laercio";
    document.getElementById("fotoCandidato").src = "img/heric.jpg";
  } else if (nmr == "0") {
    document.getElementById("nomevoto").value = "Seu voto será anulado";
  }
  // console.log(document.getElementById("nomevoto").value);
}
