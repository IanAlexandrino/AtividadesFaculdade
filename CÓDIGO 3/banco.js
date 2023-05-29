var request, db;

function criarBancoDadosUrna() {
  request = indexedDB.open("VotosUrna", 1);
  request.onupgradeneeded = (event) => {
    db = event.target.result;

    var store = db.createObjectStore("Votos", {
      keyPath: "votosTotais",
      autoIncrement: true,
    });
    store.add({
      gustavo: "0",
      ian: "0",
      heric: "0",
      branco: "0",
      nulo: "0",
    });

    // store.createIndex("gustavo", "gustavo", { unique: false });
    // store.createIndex("ian", "ian", { unique: false });
    // store.createIndex("heric", "heric", { unique: false });
    // store.createIndex("branco", "branco", { unique: false });
    // store.createIndex("nulo", "nulo", { unique: false });
  };
  request.onsuccess = (event) => {
    console.log("Banco criado com sucesso!");
    db = event.target.result;
  };
  request.onerror = (event) => {
    console.log("Erro ao criar banco de dados - " + event.target.error);
  };
}
function inserirVoto(valor) {
  if (valor == 1) {
    var voto = { gustavo: "1" };
  } else if (valor == 2) {
    var voto = { ian: "1" };
  } else if (valor == 3) {
    var voto = { heric: "1" };
  } else if (valor == 4) {
    var voto = { branco: "1" };
  } else if (valor == 5) {
    var voto = { nulo: "1" };
  }

  var transaction = db.transaction("Votos", "readwrite");

  transaction.oncomplete = (event) => {
    console.log("Transação finalizada com sucesso");
  };
  transaction.onerror = (event) => {
    console.log("Transação finalizada com erro: " + event.target.error);
  };
  var store = transaction.objectStore("Votos");

  var requestAdd = store.add(voto);

  requestAdd.onerror = (event) => {
    console.log("Ocorreu um erro ao salvar o voto");
  };
  requestAdd.onsuccess = (event) => {
    console.log("Voto salvo com sucesso!");
  };
}
function teste() {
  // const tramsaction = db.transaction
  const objectStore = db
    .transaction(["Votos"], "readwrite")
    .objectStore("Votos");

  const request = objectStore.get("Votos");

  request.onerror = (event) => {
    console.log("ERRO");
  };
  request.onsuccess = (event) => {
    const data = event.target.result;
    console.log(data);
  };

  // //   const data = event.target.result;

  // //   data.gustavo = "33";

  // //   const requestUpdate = objectStore.put(data);

  // //   requestUpdate.onerror = function (event) {
  // //    console.log("erro")
  // //   }
  // //   requestUpdate.onseccess = function (event){
  // // console.log("funcionou")
  //   }
}
