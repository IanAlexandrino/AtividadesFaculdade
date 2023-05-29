var branco;
var qtVotosGustavo = 0;
var qtVotosIan = 0;
var qtVotosHeric = 0;
var qtVotosBrancos = 0;
var qtVotosNulos = 0;
var totaldeVotos;

var votosGustavo = 0;
var votosIan = 0;
var votosHeric = 0;
var votosBrancos;
var votosNulos = 0;

var eleitor;

var arrayOrg = [
  { nome: "Gustavo", votos: qtVotosGustavo },
  { nome: "Ian Rodrigues", votos: qtVotosIan },
  { nome: "Heric", votos: qtVotosHeric },
  { nome: "Branco", votos: qtVotosBrancos },
  { nome: "Nulos", votos: qtVotosNulos },
];

var percentuais = []; //array pra armazenar o percentual de cada candidato

function pegaEleitor() {
  eleitor = window.prompt("Digite seu nome para votar");
}

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
    inserirVoto(13);
    window.alert("Voto computado!");
  } else if (nm == 22) {
    inserirVoto(22);
    window.alert("Voto computado!");
  } else if (nm == 27) {
    inserirVoto(27);
    window.alert("Voto computado!");
  } else if (branco == 1) {
    inserirVoto(1);
    window.alert("Voto computado!");
  } else if (nm == 0) {
    inserirVoto(0);
    window.alert("Voto anulado!");
  }

  corrigir();
  window.location.reload();
  // window.alert("Voto computado!");
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

function tituloEleitor() {
  var nomeEleitor = window.prompt(
    "Digite aqui seu nome para ter acesso a urna!"
  );
}

function calcularVotos() {
  votosGustavo = JSON.parse(localStorage.getItem("Candidato Gustavo"));
  console.log(votosGustavo);
  qtVotosGustavo = !votosGustavo ? 0 : votosGustavo.length;
  arrayOrg[0].votos = qtVotosGustavo;
  // console.log("Votos de Gustavo: " + qtVotosGustavo);

  votosIan = JSON.parse(localStorage.getItem("Candidato Ian"));
  qtVotosIan = !votosIan ? 0 : votosIan.length;
  arrayOrg[1].votos = qtVotosIan;
  // console.log("Votos de Ian: " + qtVotosIan);

  votosHeric = JSON.parse(localStorage.getItem("Candidato Heric"));
  qtVotosHeric = !votosHeric ? 0 : votosHeric.length;
  arrayOrg[2].votos = qtVotosHeric;
  // console.log("Votos de Heric: " + qtVotosHeric);

  votosBrancos = JSON.parse(localStorage.getItem("Votos em Branco"));
  qtVotosBrancos = !votosBrancos ? 0 : votosBrancos.length;
  arrayOrg[3].votos = qtVotosBrancos;
  // console.log("Votos em Branco: " + qtVotosBrancos);

  votosNulos = JSON.parse(localStorage.getItem("Votos Nulos"));
  qtVotosNulos = !votosNulos ? 0 : votosNulos.length;
  arrayOrg[4].votos = qtVotosNulos;

  totaldeVotos =
    qtVotosGustavo +
    qtVotosHeric +
    qtVotosIan +
    qtVotosIan +
    qtVotosBrancos +
    qtVotosNulos;
  console.log("Total de Votos: " + totaldeVotos);
  console.log(arrayOrg);
}

function percentual() {
  const qtVotosG = !votosGustavo
    ? 0
    : JSON.parse(localStorage.getItem("Candidato Gustavo")).length; //constante com o tamanho do array
  const qtVotosH = !votosHeric
    ? 0
    : JSON.parse(localStorage.getItem("Candidato Heric")).length;
  const qtVotosI = !votosIan
    ? 0
    : JSON.parse(localStorage.getItem("Candidato Ian")).length;
  const qtVotosB = !votosBrancos
    ? 0
    : JSON.parse(localStorage.getItem("Votos em Branco")).length;
  const qtVotosN = !votosNulos
    ? 0
    : JSON.parse(localStorage.getItem("Votos Nulos")).length;

  const qtVotos = qtVotosG + qtVotosH + qtVotosI + qtVotosB + qtVotosN;

  percentuais.push(((qtVotosG * 100) / qtVotos).toFixed(2));
  percentuais.push(((qtVotosH * 100) / qtVotos).toFixed(2));
  percentuais.push(((qtVotosI * 100) / qtVotos).toFixed(2));
  percentuais.push(((qtVotosB * 100) / qtVotos).toFixed(2));
  percentuais.push(((qtVotosN * 100) / qtVotos).toFixed(2));
}

function preencherTelaMesario() {
  calcularVotos();
  percentual();
  var candidato01 = document.getElementById("qtVotos1");
  candidato01.innerHTML = `${arrayOrg[0].votos} votos`;
  var percentual01 = document.getElementById("pcrtVotos1");
  percentual01.innerHTML = `${percentuais[0]}%`;

  var candidato02 = document.getElementById("qtVotos2");
  candidato02.innerHTML = `${arrayOrg[2].votos} votos`;
  var percentual02 = document.getElementById("pcrtVotos2");
  percentual02.innerHTML = `${percentuais[1]}%`;

  var candidato03 = document.getElementById("qtVotos3");
  candidato03.innerHTML = `${arrayOrg[1].votos} votos`;
  var percentual03 = document.getElementById("pcrtVotos3");
  percentual03.innerHTML = `${percentuais[2]}%`;

  var votobranco = document.getElementById("qtVotos4");
  votobranco.innerHTML = `${arrayOrg[3].votos} votos`;
  var percentual04 = document.getElementById("pcrtVotos4");
  percentual04.innerHTML = `${percentuais[3]}%`;

  var votonulo = document.getElementById("qtVotos5");
  votonulo.innerHTML = `${arrayOrg[4].votos} votos`;
  var percentual05 = document.getElementById("pcrtVotos5");
  percentual05.innerHTML = `${percentuais[4]}%`;

  var total = document.getElementById("totaldevotos");
  total.innerHTML = `${totaldeVotos}`;
}
