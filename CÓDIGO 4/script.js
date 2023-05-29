var btnBranco;

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
  btnBranco = 0;
}
function votoBranco() {
  document.getElementById("nmrvoto").value = "";
  document.getElementById("nomevoto").value = "Seu voto será em branco";
  btnBranco = 1;
}

function confirma() {
 corrigir();
 window.alert("Voto computado com sucesso!");

}

function preencherTela(nmr) {
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
  } else if ((nmr != 22) & (nmr != 13) & (nmr != 27) & (nmr != 00)) {
    document.getElementById("nomevoto").value = "--";
  }
} // console.log(document.getElementById("nomevoto").value);

function validarMesario() {
  password = "admin";
  url = "mesario.html";
  resprompt = window.prompt("Digite a senha do Mesário", "******");
  if (resprompt === password) {
    window.location.href = "./mesario.html";
  } else {
    window.alert("Senha incorreta!");
  }
}


