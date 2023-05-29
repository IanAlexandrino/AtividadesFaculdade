class Candidato {
  constructor(nome, numero, votos) {
    this.nome = nome;
    this.numero = numero;
    this.votos = votos;
  }

  imprimir() {
    var formulario = 
    `Nome: ${this.nome}` +
    `Numero: ${this.numero}` +
    `Votos: ${this.votos}` ;

    return formulario;
  }
}

const candIan = new Candidato("Ian Rodrigues", "22");

const candGustavo = new Candidato("Gustavo Gonzaga", "13");

const candHeric = new Candidato("Heric Laercio", "27");

const votoBranco = new Candidato("Branco", "");

const votoNulo = new Candidato("Nulo", "0");


console.log(gustavo.imprimir());
