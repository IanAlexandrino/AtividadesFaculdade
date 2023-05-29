var votosGustavo = [];
var votosIan = [];
var votosHeric = [];
var votosBranco = [];
var votosNulos = [];

function inserirVoto(voto) {
  numeroCandidato = voto;
  let votoEleitor = document.getElementById("nmrvoto").value;

  // if (localStorage.hasOwnProperty("Candidato Gustavo")) {
  //   votosGustavo = JSON.parse(localStorage.getItem("Candidato Gustavo"));
  // }
  if (numeroCandidato == 13) {
    if (localStorage.hasOwnProperty("Candidato Gustavo")) {
      votosGustavo = JSON.parse(localStorage.getItem("Candidato Gustavo"));
    }
    console.log(votosGustavo);
    votosGustavo.push({ eleitor, votoEleitor });
    localStorage.setItem("Candidato Gustavo", JSON.stringify(votosGustavo));
  } else if (numeroCandidato == 22) {
    if (localStorage.hasOwnProperty("Candidato Ian")) {
      votosIan = JSON.parse(localStorage.getItem("Candidato Ian"));
    }
    console.log(votosIan);
    votosIan.push({ eleitor, votoEleitor });
    localStorage.setItem("Candidato Ian", JSON.stringify(votosIan));
  } else if (numeroCandidato == 27) {
    if (localStorage.hasOwnProperty("Candidato Heric")) {
      votosHeric = JSON.parse(localStorage.getItem("Candidato Heric"));
    }
    votosHeric.push({ eleitor, votoEleitor });
    console.log(votosHeric);
    localStorage.setItem("Candidato Heric", JSON.stringify(votosHeric));
  } else if (numeroCandidato == 1) {
    if (localStorage.hasOwnProperty("Votos em Branco")) {
      votosBranco = JSON.parse(localStorage.getItem("Votos em Branco"));
    }
    votosBranco.push({ eleitor, votoEleitor });
    console.log(votosBranco);
    localStorage.setItem("Votos em Branco", JSON.stringify(votosBranco));
  } else if (numeroCandidato == 0) {
    if (localStorage.hasOwnProperty("Votos Nulos")) {
      votosNulos = JSON.parse(localStorage.getItem("Votos Nulos"));
    }
    votosNulos.push({ eleitor, votoEleitor });
    console.log(votosNulos);
    localStorage.setItem("Votos Nulos", JSON.stringify(votosNulos));
  }
}

// function apurarVotos() {
//   var votosGus = JSON.parse(localStorage.getItem("Candidato Gustavo"));
//   console.log(votosGus.length);
// }
