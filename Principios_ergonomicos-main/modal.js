function abrirModal(a) {
  if (a == 1) {
    const modal = document.getElementById("janela-modal1");
    modal.classList.add("abrir");

    modal.addEventListener("click", (e) => {
      if (e.target.id == "janela-modal1") {
        modal.classList.remove("abrir");
        location.reload();
      }
    });
  } else if (a == 2) {
    const modal = document.getElementById("janela-modal1");

    document.getElementById("imagem").src = "images/Luck-2.png";
    document.getElementById("titRoup").innerHTML = "Azul Royal";
    document.getElementById("contRoup").innerHTML =
      "Esta camisa tem um tom de azul intenso e vibrante, com um corte ajustado ao corpo que valoriza a silhueta masculina. Feita em tecido de algodão de alta qualidade, possui colarinho clássico, punhos com botões e é perfeita para ocasiões que exigem um visual elegante e sofisticado.";

    modal.classList.add("abrir");

    modal.addEventListener("click", (e) => {
      if (e.target.id == "janela-modal1") {
        modal.classList.remove("abrir");
        location.reload();
      }
    });
  } else if (a == 3) {
    const modal = document.getElementById("janela-modal1");
    document.getElementById("imagem").src = "images/camisaXadrez";
    document.getElementById("titRoup").innerHTML = "Xadrez Vichy Vermelha";
    document.getElementById("contRoup").innerHTML =
      "Essa camisa apresenta um padrão xadrez em azul marinho e vermelho, com um corte slim fit que valoriza a silhueta masculina. É confeccionada em tecido de algodão macio e de alta qualidade, com colarinho clássico, botões na parte da frente e nos punhos. É uma ótima escolha para um visual elegante e moderno, e pode ser combinada com calças sociais ou jeans, dependendo da ocasião.";
    modal.classList.add("abrir");

    modal.addEventListener("click", (e) => {
      if (e.target.id == "janela-modal1") {
        modal.classList.remove("abrir");
        location.reload();
      }
    });
  } else if (a == 4) {
    const modal = document.getElementById("janela-modal1");
    document.getElementById("imagem").src = "images/luck-4.png";
    document.getElementById("titRoup").innerHTML = "Xadrez Vichy Azul";
    document.getElementById("contRoup").innerHTML =
      "Essa camisa apresenta um padrão xadrez em azul marinho e branco, com um corte slim fit que valoriza a silhueta masculina. É confeccionada em tecido de algodão macio e de alta qualidade, com colarinho clássico, botões na parte da frente e nos punhos. É uma ótima escolha para um visual elegante e moderno, e pode ser combinada com calças sociais ou jeans, dependendo da ocasião.";
    modal.classList.add("abrir");

    modal.addEventListener("click", (e) => {
      if (e.target.id == "janela-modal1") {
        modal.classList.remove("abrir");
        location.reload();
      }
    });
  } else if (a == 5) {
    const modal = document.getElementById("janela-modal1");
    document.getElementById("imagem").src = "images/luck-3.png";
    document.getElementById("titRoup").innerHTML = "Xadrez Vichy Marrom";
    document.getElementById("contRoup").innerHTML =
      "Essa camisa apresenta um padrão xadrez em azul marinho e Marrom, com um corte slim fit que valoriza a silhueta masculina. É confeccionada em tecido de algodão macio e de alta qualidade, com colarinho clássico, botões na parte da frente e nos punhos. É uma ótima escolha para um visual elegante e moderno, e pode ser combinada com calças sociais ou jeans, dependendo da ocasião.";
    modal.classList.add("abrir");

    modal.addEventListener("click", (e) => {
      if (e.target.id == "janela-modal1") {
        modal.classList.remove("abrir");
        location.reload();
      }
    });
  } else if (a == 6) {
    const modal = document.getElementById("janela-modal1");
    document.getElementById("imagem").src = "images/Untitled - 1.png";
    document.getElementById("titRoup").innerHTML = "Social Slim Fit Azul Claro";
    document.getElementById("contRoup").innerHTML =
      'A "Camisa Social Slim Fit Azul Claro" é uma peça sofisticada e elegante que apresenta um tom de azul claro suave e delicado. O corte slim fit proporciona um caimento impecável, valorizando a silhueta masculina de forma moderna e elegante';
    modal.classList.add("abrir");

    modal.addEventListener("click", (e) => {
      if (e.target.id == "janela-modal1") {
        modal.classList.remove("abrir");
        location.reload();
      }
    });
  }
}

function defPreco(a) {
  var preco = document.querySelector("#preco");

  if (a == 1) {
    preco.innerHTML = "R$ 100,00";
  } else if (a == 2) {
    preco.innerHTML = "R$ 105,00";
  } else if (a == 3) {
    preco.innerHTML = "R$ 110,00";
  } else if (a == 4) {
    preco.innerHTML = "R$ 120,00";
  }
}
